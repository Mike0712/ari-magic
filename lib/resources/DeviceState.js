'use strict';

const Resource = require('./Resource');

class DeviceState extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'deviceName';

    _resource = 'deviceStates';

    get _id() {
        return this.name;
    }

    set _id(value) {
        this.name = value;
    }
}

module.exports = DeviceState;