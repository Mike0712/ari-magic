class StopException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'StopException';
		this.code = code
	}
}

 module.exports = StopException;

