class GetGlobalVarException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetGlobalVarException';
		this.code = code
	}
}

 module.exports = GetGlobalVarException;

