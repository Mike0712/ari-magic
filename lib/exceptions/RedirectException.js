class RedirectException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RedirectException';
		this.code = code
	}
}

 module.exports = RedirectException;

