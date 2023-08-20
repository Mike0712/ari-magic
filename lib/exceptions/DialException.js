class DialException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DialException';
		this.code = code
	}
}

 module.exports = DialException;

