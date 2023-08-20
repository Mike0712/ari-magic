class RingException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RingException';
		this.code = code
	}
}

 module.exports = RingException;

