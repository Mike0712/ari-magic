class GetException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetException';
		this.code = code
	}
}

 module.exports = GetException;

