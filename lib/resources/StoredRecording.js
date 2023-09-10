'use strict';

const Resource = require('./Resource');

class StoredRecording extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'recordingName';

    _resource = 'recordings';

    get _id() {
        return this.name;
    }

    set _id(value) {
        this.name = value;
    }
}

module.exports = StoredRecording;