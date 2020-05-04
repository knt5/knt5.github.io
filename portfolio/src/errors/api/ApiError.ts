import AppError from '@/errors/AppError';
import ApiRequest from '@/models/api/ApiRequest';
import ApiResponse from '@/models/api/ApiResponse';
import ApiRequestBody from '@/models/api/ApiRequestBody';

/** ApiError */
export default class ApiError<
	T extends ApiRequest,
	B extends ApiRequestBody,
	R extends ApiResponse
> extends AppError {
	/** Constructor */
	constructor(
		errorName: string,
		status: number,
		url?: string,
		response?: R,
		request?: T,
		requestBody?: B
	) {
		// Build error message
		const messages = [];
		url ?? messages.push(`URL: ${url}`);
		response ?? messages.push(`Response: ${JSON.stringify(response)}`);
		request ?? messages.push(`Request: ${JSON.stringify(request)}`);
		requestBody ??
			messages.push(`Request body: ${JSON.stringify(requestBody)}`);
		messages.length || messages.unshift(``);

		super(`${errorName}: ${status}${messages.join(`\n`)}`);

		this.at = new Date();
		this.status = status;
		this.url = url;
		this.response = response;
		this.request = request;
		this.requestBody = requestBody;
	}

	/** API error occurred time */
	readonly at: Date;

	/** API response status */
	readonly status: number;

	/** API request URL */
	readonly url?: string;

	/** API response */
	readonly response?: R;

	/** API request */
	readonly request?: T;

	/** API request body */
	readonly requestBody?: B;
}
