class DeleteStoredException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'DeleteStoredException';
		this.code = code
	}
}

 module.exports = DeleteStoredException;

