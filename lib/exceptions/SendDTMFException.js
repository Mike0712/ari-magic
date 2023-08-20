class SendDTMFException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SendDTMFException';
		this.code = code
	}
}

 module.exports = SendDTMFException;

