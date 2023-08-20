class UnsubscribeException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UnsubscribeException';
		this.code = code
	}
}

 module.exports = UnsubscribeException;

