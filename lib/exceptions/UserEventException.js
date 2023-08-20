class UserEventException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'UserEventException';
		this.code = code
	}
}

 module.exports = UserEventException;

