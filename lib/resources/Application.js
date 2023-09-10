'use strict';

const Resource = require('./Resource');

class Application extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'applicationName';

    _resource = 'applications';

    get _id() {
        return this.name;
    }

    set _id(value) {
        this.name = value;
    }
}

module.exports = Application;