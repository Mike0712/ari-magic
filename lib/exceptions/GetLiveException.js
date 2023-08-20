class GetLiveException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'GetLiveException';
		this.code = code
	}
}

 module.exports = GetLiveException;

