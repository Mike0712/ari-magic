class MoveException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'MoveException';
		this.code = code
	}
}

 module.exports = MoveException;

