class UpdateException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UpdateException';
		this.code = code
	}
}

 module.exports = UpdateException;

