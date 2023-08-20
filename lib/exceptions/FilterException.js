class FilterException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'FilterException';
		this.code = code
	}
}

 module.exports = FilterException;

