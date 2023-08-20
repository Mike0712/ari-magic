class AddLogException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'AddLogException';
		this.code = code
	}
}

 module.exports = AddLogException;

