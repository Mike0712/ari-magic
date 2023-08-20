class PauseException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'PauseException';
		this.code = code
	}
}

 module.exports = PauseException;

