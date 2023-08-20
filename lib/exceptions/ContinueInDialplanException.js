class ContinueInDialplanException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ContinueInDialplanException';
		this.code = code
	}
}

 module.exports = ContinueInDialplanException;

