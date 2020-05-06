import AppError from '@/errors/AppError';

/** ApiCancelError */
export default class ApiCancelError extends AppError {
	/** constructor */
	constructor() {
		super(`API canceled`);
	}
}
