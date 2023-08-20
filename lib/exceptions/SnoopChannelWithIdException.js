class SnoopChannelWithIdException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'SnoopChannelWithIdException';
		this.code = code
	}
}

 module.exports = SnoopChannelWithIdException;

