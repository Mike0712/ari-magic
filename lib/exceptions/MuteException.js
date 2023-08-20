class MuteException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'MuteException';
		this.code = code
	}
}

 module.exports = MuteException;

