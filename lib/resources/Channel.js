'use strict';

const Resource = require('./Resource');

class Channel extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'channelId';

    _resource = 'channels';

    static get _createMethods() {
        return {
            create: {
                param: this._param
            },
            originate: {
                param: this._param
            },
            snoopChannel: {
                param: 'snoopId',
                requiresInstance: true
            },
            play: {
                param: 'playbackId',
                requiresInstance: true
            },
            record: {
                param: 'name',
                requiresInstance: true
            },
            externalMedia: {
                param: this._param
            }
        };
    }
}

module.exports = Channel;