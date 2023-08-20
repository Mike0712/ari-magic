class SetVideoSourceException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SetVideoSourceException';
		this.code = code
	}
}

 module.exports = SetVideoSourceException;

