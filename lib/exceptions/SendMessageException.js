class SendMessageException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SendMessageException';
		this.code = code
	}
}

 module.exports = SendMessageException;

