class DeleteLogException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DeleteLogException';
		this.code = code
	}
}

 module.exports = DeleteLogException;

