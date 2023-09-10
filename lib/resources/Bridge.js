'use strict';

const Resource = require('./Resource');

class Bridge extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'bridgeId';

    _resource = 'bridges';

    static get _createMethods() {
        return {
            create: {
                param: Bridge._param  // assuming you've defined a Bridge class elsewhere
            },
            play: {
                param: 'playbackId',
                requiresInstance: true
            },
            record: {
                param: 'name',
                requiresInstance: true
            }
        };
    }
}

module.exports = Bridge;