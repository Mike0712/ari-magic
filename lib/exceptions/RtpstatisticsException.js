class RtpstatisticsException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RtpstatisticsException';
		this.code = code
	}
}

 module.exports = RtpstatisticsException;

