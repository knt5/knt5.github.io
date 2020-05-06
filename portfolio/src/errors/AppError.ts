/** AppError */
export default class AppError extends Error {
	/** constructor */
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype); // for stack trace
	}
}
