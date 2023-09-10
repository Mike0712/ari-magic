'use strict';

const Resource = require('./Resource');

class Playback extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'playbackId';

    _resource = 'playbacks';
}

module.exports = Playback;