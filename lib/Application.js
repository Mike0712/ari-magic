'use strict';

const path = require('node:path');
const events = require('node:events');
const WebSocket = require('ws');
const fetch = require('./fetch');
const handleMessage = require('./handleMessage');
const { error } = require('node:console');

class Application extends events.EventEmitter {
    #config;
    #baseUrl;
    #headers;
    constructor(config) {
        super();
        if (config.path) {
            this.#config = require(path.join(process.cwd(), config.path));
        }
        if (config.items) {
            this.#config = config.items;
        }

        const protocol = this.#config.protocol ? this.#config.protocol : 'http';
        this.#baseUrl = `${protocol}://${this.#config.host}:${this.#config.port}/ari`;
        const encoded = Buffer.from(`${this.#config.api}:${this.#config.key}`, 'utf8').toString('base64');
        this.#headers = { Authorization: `Basic ${encoded}` };
        this.api = {};
    }

    async init() {
        const resources = await fetch(`${this.#baseUrl}/api-docs/resources.json`, { method: 'GET', headers: this.#headers })
            .then(resp => {
                if (resp.statusCode === 200) {
                    return resp.data.apis;
                }
            });
        await this.collectApi(resources);
        this.wsClient(this.#config.applications);

        return this;
    }

    async collectApi(resources) {
        let items = [];
        const api = {};
        for await (const resource of resources) {
            const resName = resource.path.substring(10, resource.path.length - 9);
            const place = `${resource.path.split('.')[0]}.json`;
            const res = await fetch(`${this.#baseUrl}${place}`, { method: 'GET', headers: this.#headers })
                .then(async resp => {
                    if (resp.statusCode === 200) {
                        return resp.data
                    }
                });
            items = [...items, ...res.apis];
            api[resName] = {};
        }
        for (const item of items) {
            const name = item.nickname;
            const resName = item.path.split('/')[1];
            for (const oper of item.operations) {
                api[resName][oper.nickname] = function (params) {
                    // collect params
                    const errors = [];
                    const query = {};
                    const pathQuery = {};
                    const body = {};
                    for (const parameter of oper.parameters) {
                        if (parameter.required && !params[parameter.name]) {
                            error.push(`Required param ${parameter.name} is missing`);
                            continue;
                        }
                        if (params[parameter.name] !== undefined) {
                            if (parameter.paramType === 'path') {
                                pathQuery[parameter.name] = params[parameter.name];
                            }
                            if (parameter.paramType === 'query') {
                                query[parameter.name] = params[parameter.name];
                            }
                            if (parameter.paramType === 'body') {
                                body[parameter.name] = params[parameter.name];
                            }
                        }
                    }
                    if (errors.length > 0) {
                        throw new Error(errors.join('\n'));
                    }
                    let url = `${this.#baseUrl}${item.path}`;
                    if (Object.keys(pathQuery).length > 0) {
                        for (const key in pathQuery) {
                            url = url.replace(`{${key}}`, pathQuery[key]);
                        }
                    }
                    if (Object.keys(query).length > 0) {
                        const queryParams = new URLSearchParams(query);
                        url = `${url}?${queryParams.toString()}`;
                    }


                    return fetch(url, { method: oper.httpMethod, headers: this.#headers }, JSON.stringify(body))
                        .catch((error) => {
                            if (oper.errorResponses) {
                                const errorClass = require(path.join(__dirname, `./exceptions/${oper.nickname.substring(0, 1).toUpperCase() + oper.nickname.substring(1)}Exception.js`));
                                throw new errorClass(error.message, error.code);
                            } else {
                                throw error;
                            }
                        })
                }
            }
        }

        this.api = api;
    }

    wsClient(applications) {
        let app = null
        if (Array.isArray(applications)) {
            app = applications.join(',');
        } else if (typeof applications === 'string') {
            app = applications;
        }
        let wsProtocol = 'ws';
        if (this.#config.protocol === 'https') {
            wsProtocol = 'wss';
        }
        let subscribeAll = '';
        if (this.#config.subscribeAll) {
            subscribeAll = '&subscribeAll=true';
        }
        const ws = new WebSocket(
            `${wsProtocol}://${this.#config.host}:${this.#config.port}/ari/events?app=${app}${subscribeAll}&api_key=${this.#config.api}:${this.#config.key}`
        );
        ws.on('open', () => {
            this.emit('open');
            console.log(
                '\x1b[32m%s\x1b[0m',
                `\nWebSocket application have ${this.#config.applications} opened on ${wsProtocol}://${this.#config.host}:${this.#config.port}`
            );
        });
        ws.on('message', (data) => {
            const [type, items] = handleMessage(data.toString());
            this.emit(type, items);
        });
        ws.on('close', (code, reason) => {
            this.emit('close', code, reason);
        });
        ws.on('error', (error) => {
            this.emit('error', error);
        });
        this.ws = ws;
    }
}

module.exports = Application;
