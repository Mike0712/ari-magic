class GetStoredException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetStoredException';
		this.code = code
	}
}

 module.exports = GetStoredException;

