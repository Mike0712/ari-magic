class UnloadModuleException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UnloadModuleException';
		this.code = code
	}
}

 module.exports = UnloadModuleException;

