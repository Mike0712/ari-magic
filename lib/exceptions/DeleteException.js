class DeleteException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DeleteException';
		this.code = code
	}
}

 module.exports = DeleteException;

