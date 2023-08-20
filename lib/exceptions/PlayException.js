class PlayException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'PlayException';
		this.code = code
	}
}

 module.exports = PlayException;

