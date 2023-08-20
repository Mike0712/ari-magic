class ListByTechException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'ListByTechException';
		this.code = code
	}
}

 module.exports = ListByTechException;

