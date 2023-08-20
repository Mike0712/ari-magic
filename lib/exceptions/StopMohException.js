class StopMohException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'StopMohException';
		this.code = code
	}
}

 module.exports = StopMohException;

