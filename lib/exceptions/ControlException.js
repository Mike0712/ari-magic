class ControlException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ControlException';
		this.code = code
	}
}

 module.exports = ControlException;

