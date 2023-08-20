class StartMohException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'StartMohException';
		this.code = code
	}
}

 module.exports = StartMohException;

