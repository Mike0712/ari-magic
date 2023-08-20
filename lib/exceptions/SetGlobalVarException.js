class SetGlobalVarException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SetGlobalVarException';
		this.code = code
	}
}

 module.exports = SetGlobalVarException;

