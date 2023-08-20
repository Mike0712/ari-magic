class SubscribeException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SubscribeException';
		this.code = code
	}
}

 module.exports = SubscribeException;

