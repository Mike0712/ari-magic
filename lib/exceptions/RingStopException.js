class RingStopException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RingStopException';
		this.code = code
	}
}

 module.exports = RingStopException;

