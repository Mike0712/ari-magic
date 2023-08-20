class SendMessageToEndpointException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SendMessageToEndpointException';
		this.code = code
	}
}

 module.exports = SendMessageToEndpointException;

