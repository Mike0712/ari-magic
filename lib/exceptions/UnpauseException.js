class UnpauseException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UnpauseException';
		this.code = code
	}
}

 module.exports = UnpauseException;

