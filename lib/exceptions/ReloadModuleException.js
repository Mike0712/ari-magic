class ReloadModuleException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ReloadModuleException';
		this.code = code
	}
}

 module.exports = ReloadModuleException;

