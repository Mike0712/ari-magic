class OriginateWithIdException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'OriginateWithIdException';
		this.code = code
	}
}

 module.exports = OriginateWithIdException;

