class ClearVideoSourceException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ClearVideoSourceException';
		this.code = code
	}
}

 module.exports = ClearVideoSourceException;

