class StartSilenceException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'StartSilenceException';
		this.code = code
	}
}

 module.exports = StartSilenceException;

