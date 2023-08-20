class UnmuteException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UnmuteException';
		this.code = code
	}
}

 module.exports = UnmuteException;

