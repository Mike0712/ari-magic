'use strict';

const Resource = require('./Resource');

class Asterisk extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = '';

    _resource = 'asterisk';
}

module.exports = Asterisk;