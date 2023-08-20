class DestroyException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DestroyException';
		this.code = code
	}
}

 module.exports = DestroyException;

