'use strict';

const Resource = require('./Resource');

class Mailbox extends Resource {
    constructor(client, id, objValues) {
        super(client, id, objValues);
    }
    _param = 'mailboxName';

    _resource = 'mailboxes';

    get _id() {
        return this.name;
    }

    set _id(value) {
        this.name = value;
    }
}

module.exports = Mailbox;