class GetStoredFileException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetStoredFileException';
		this.code = code
	}
}

 module.exports = GetStoredFileException;

