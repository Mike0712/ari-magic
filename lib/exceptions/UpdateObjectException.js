class UpdateObjectException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UpdateObjectException';
		this.code = code
	}
}

 module.exports = UpdateObjectException;

