'use strict';

const Application = require('./Application.js');

module.exports = (config) => {
    const app = new Application(config);
    return app.init();
};