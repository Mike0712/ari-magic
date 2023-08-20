class UnholdException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UnholdException';
		this.code = code
	}
}

 module.exports = UnholdException;

