class LoadModuleException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'LoadModuleException';
		this.code = code
	}
}

 module.exports = LoadModuleException;

