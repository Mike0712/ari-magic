class GetModuleException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetModuleException';
		this.code = code
	}
}

 module.exports = GetModuleException;

