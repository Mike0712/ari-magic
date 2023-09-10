'use strict';

const Resource = require('./Resource');

class Endpoint extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = ['tech', 'resource'];

    _resource = 'endpoints';

    get _id() {
        return {
            tech: this.technology,
            resource: this.resource,
            toString: function () {
                return util.format('%s/%s', this.technology, this.resource);
            }
        };
    }

    set _id(value) {
        this.technology = value.technology;
        this.resource = value.resource;
    }
}

module.exports = Endpoint;