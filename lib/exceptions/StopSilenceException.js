class StopSilenceException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'StopSilenceException';
		this.code = code
	}
}

 module.exports = StopSilenceException;

