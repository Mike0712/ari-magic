class GetObjectException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetObjectException';
		this.code = code
	}
}

 module.exports = GetObjectException;

