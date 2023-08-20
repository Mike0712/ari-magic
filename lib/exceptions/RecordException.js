class RecordException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RecordException';
		this.code = code
	}
}

 module.exports = RecordException;

