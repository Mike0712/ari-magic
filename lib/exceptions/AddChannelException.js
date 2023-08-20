class AddChannelException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'AddChannelException';
		this.code = code
	}
}

 module.exports = AddChannelException;

