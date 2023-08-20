class ExternalMediaException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ExternalMediaException';
		this.code = code
	}
}

 module.exports = ExternalMediaException;

