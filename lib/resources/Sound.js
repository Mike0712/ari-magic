'use strict';

const Resource = require('./Resource');

class Sound extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'soundId';

    _resource = 'sounds';
}

module.exports = Sound;