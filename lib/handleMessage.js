module.exports = function handleMessage(data) {
    const message = JSON.parse(data);
    const type = message.type;
    const channel = message.channel;

    return [type, channel];
}