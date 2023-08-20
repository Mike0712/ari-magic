'use strict';

const https = require('https');
const http = require('http');

module.exports = (url, options = {}, body) => {
    const client = url.startsWith('https') ? https : http;
    if (body) {
        options['Content-Length'] = Buffer.byteLength(body);
    }
    return new Promise((resolve, reject) => {
        const req = client.request(
            url,
            options,
            (resp) => {
                if (resp.errno) {
                    reject(resp);
                }
                const chunks = [];
                resp.on('data', data => chunks.push(data))
                resp.on('end', () => {
                    let resBody = Buffer.concat(chunks);
                    switch (resp.headers['content-type']) {
                        case 'application/json':
                            resBody = JSON.parse(resBody);
                            break;
                    }
                    resp.data = resBody
                    resolve(resp);
                })
            }
        )
        req.on('error', reject)
        if (body) {
            req.write(body);
        }
        req.end();
    })
}
