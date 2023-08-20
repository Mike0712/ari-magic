class HoldException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'HoldException';
		this.code = code
	}
}

 module.exports = HoldException;

