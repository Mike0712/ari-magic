class DeleteObjectException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DeleteObjectException';
		this.code = code
	}
}

 module.exports = DeleteObjectException;

