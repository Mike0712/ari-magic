class GetChannelVarException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetChannelVarException';
		this.code = code
	}
}

 module.exports = GetChannelVarException;

