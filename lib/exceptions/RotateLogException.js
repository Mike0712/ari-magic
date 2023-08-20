class RotateLogException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RotateLogException';
		this.code = code
	}
}

 module.exports = RotateLogException;

