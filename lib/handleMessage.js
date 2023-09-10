const fsp = require('fs').promises;
const res = require('./resources');

module.exports = async function handleMessage(data, models) {
    const message = JSON.parse(data);
    const type = message.type;
    const resources = {};
    const model = models[type];

    if (model) {
        for (const [name, obj] in Object.entries(model.properties)) {
            if (res[obj.type] !== undefined) {
                const instance = new res[obj.type](this, message[name], obj);
            }
        }
    }

    return [type, message, resources];
}