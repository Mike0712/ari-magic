class SetChannelVarException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SetChannelVarException';
		this.code = code
	}
}

 module.exports = SetChannelVarException;

