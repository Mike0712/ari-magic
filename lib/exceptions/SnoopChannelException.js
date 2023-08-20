class SnoopChannelException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SnoopChannelException';
		this.code = code
	}
}

 module.exports = SnoopChannelException;

