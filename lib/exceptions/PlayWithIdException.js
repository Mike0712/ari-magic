class PlayWithIdException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'PlayWithIdException';
		this.code = code
	}
}

 module.exports = PlayWithIdException;

