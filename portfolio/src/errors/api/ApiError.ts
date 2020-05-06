import dayjs from 'dayjs';
import AppError from '@/errors/AppError';
import ApiResponse from '@/models/api/ApiResponse';

const dateTimeFormat = `YYYY/MM/DD HH:mm:ss`;

/** ApiError */
export default class ApiError<R extends ApiResponse> extends AppError {
	/** Constructor */
	constructor(
		errorName: string,
		status: number,
		url?: string,
		response?: R | string
	) {
		const at = new Date();

		// Build error message
		const messages = [];
		messages.push(`status: ${status}`);
		messages.push(`url: ${url}`);
		messages.push(`at: ${dayjs(at).format(dateTimeFormat)}`);
		messages.push(`response: ${JSON.stringify(response)}`);

		super(`${errorName}:\n${messages.join(`\n`)}`);

		this.at = at;
		this.status = status;
		this.url = url;
		this.response = response;
	}

	/** API error occurred time */
	readonly at: Date;

	/** API response status */
	readonly status: number;

	/** API request URL */
	readonly url?: string;

	/** API response */
	readonly response?: R | string;
}
