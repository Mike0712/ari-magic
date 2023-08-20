class CancelException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'CancelException';
		this.code = code
	}
}

 module.exports = CancelException;

