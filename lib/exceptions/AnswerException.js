class AnswerException extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'AnswerException';
		this.code = code
	}
}

 module.exports = AnswerException;

