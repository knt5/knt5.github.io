import ApiError from '@/errors/api/ApiError';
import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** PortfolioApiError */
export default class PortfolioApiError<
	R extends PortfolioApiResponse
> extends ApiError<PortfolioApiResponse> {
	constructor(status: number, url?: string, response?: R | string) {
		super(`PortfolioApiError`, status, url, response);
	}
}
