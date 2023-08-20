class CopyStoredException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'CopyStoredException';
		this.code = code
	}
}

 module.exports = CopyStoredException;

