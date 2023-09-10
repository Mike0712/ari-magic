'use strict';

const EventEmitter = require('events');
const uuid = require('uuid');
const util = require('util');


class Resource extends EventEmitter {
    constructor(client, id, objValues) {
        super();

        this._client = client;

        // if id is optional
        if (!objValues) {
            objValues = id;
        }

        Object.keys(objValues).forEach((key) => {
            this[key] = objValues[key];
        });

        // if creation did not come from swagger, generate id
        if (!objValues) {
            this.generateId();
        }

        // if second argument is a string, use it as an id
        if (typeof id === 'string') {
            this._id(id);
            this._generatedId = true;
        }
    }

    /**
     * Generates a unique id for the resource.
     */
    generateId() {
        const id = uuid.v4();

        this._id(id);
        this._generatedId = true;
    }

    /**
     * Attaches an event to the client.
     *
     * @param {string} event - event name
     * @param {Function} callback - callback invoked on event
     */
    on(event, callback) {
        const id = this._id && this._id.toString();

        // Forwarding events to the client or registering events to this instance as required
        // If you want the resource instance itself to emit and handle events,
        // you can remove the client logic and just use super.on(event, callback)
        this._client.on(`${event}-${id}`, callback);

        // If you want to also track listeners within the Resource class, add the tracking logic here.
        // ...
    }

    once(event, callback) {
        const id = this._id && this._id.toString();

        this._client.once(util.format('%s-%s', event, id), callback);
    }

    addListener(event, callback) {
        return this.on(event, callback);
    }

    /**
     * Removes the specified listener from the client.
     *
     * @param {string} event - event name
     * @param {Function} callback - callback previously registered
     */
    removeListener(event, callback) {
        const id = this._id && this._id.toString();

        // Custom logic for removing listener from client (if needed)
        this._client.removeListener(`${event}-${id}`, callback);

        // Call the parent class's removeListener method
        super.removeListener(event, callback);
    }

    /**
     * Removes all listeners for the specified event from the client.
     * If no event is specified, removes all listeners of all events.
     *
     * @param {string} [event] - event name
     */
    removeAllListeners(event) {
        const id = this._id && this._id.toString();

        if (event) {
            // Custom logic for removing all listeners of a specific event from client (if needed)
            this._client.removeAllListeners(`${event}-${id}`);

            // Call the parent class's removeAllListeners method for a specific event
            super.removeAllListeners(event);
        } else {
            // Custom logic for removing all listeners of all events from client (if needed)
            // Note: Depending on the client's implementation, this might need more careful handling.
            this._client.removeAllListeners();

            // Call the parent class's removeAllListeners method for all events
            super.removeAllListeners();
        }
    }

    // Getter/Setter for _id (or other appropriate method if needed)
    get _id() {
        return this.id;
    }

    set _id(value) {
        this.id = value;
    }
}

module.exports = Resource;