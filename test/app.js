const start = require('../lib/index.js');

const app = start({ path: 'test/config.js' })
    .then((app) => {
        app.on('ChannelDestroyed', (event) => {
            console.log(event);
        })
    });


