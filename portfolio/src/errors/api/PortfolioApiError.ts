import ApiError from '@/errors/api/ApiError';
import PortfolioApiRequest from '@/models/api/portfolio/PortfolioApiRequest';
import PortfolioApiRequestBody from '@/models/api/portfolio/PortfolioApiRequestBody';
import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** PortfolioApiError */
export default class PortfolioApiError<
	T extends PortfolioApiRequest,
	B extends PortfolioApiRequestBody,
	R extends PortfolioApiResponse
> extends ApiError<
	PortfolioApiRequest,
	PortfolioApiRequestBody,
	PortfolioApiResponse
> {
	/** Constructor */
	constructor(
		status: number,
		url?: string,
		response?: R,
		request?: T,
		requestBody?: B
	) {
		super(`PortfolioApiError`, status, url, response, request, requestBody);
	}
}
