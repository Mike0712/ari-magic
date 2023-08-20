class OriginateException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'OriginateException';
		this.code = code
	}
}

 module.exports = OriginateException;

