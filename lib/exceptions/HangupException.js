class HangupException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'HangupException';
		this.code = code
	}
}

 module.exports = HangupException;

