class CreateException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'CreateException';
		this.code = code
	}
}

 module.exports = CreateException;

