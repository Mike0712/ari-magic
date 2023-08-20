class RemoveChannelException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'RemoveChannelException';
		this.code = code
	}
}

 module.exports = RemoveChannelException;

