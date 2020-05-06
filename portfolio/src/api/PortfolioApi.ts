import Api from '@/api/Api';
import PortfolioApiError from '@/errors/api/PortfolioApiError';
import PortfolioApiRequest from '@/models/api/portfolio/PortfolioApiRequest';
import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** PortfolioApi */
export default class PortfolioApi extends Api {
	/** Constructor */
	constructor(apiName: string) {
		super(apiName);
		this.api = this.create({}, this.handle);
	}

	/** GET */
	async get<T extends PortfolioApiRequest, R extends PortfolioApiResponse>(
		url: string,
		request: T,
		options: Api.RequestOptions
	): Promise<R> {
		return super.get(url, request, options);
	}

	/** Error handler */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected handle(error: any): void {
		super.handle(error);

		if (error.response) {
			throw new PortfolioApiError(
				error.response.status,
				error.response.request?.responseURL, // IE not supported
				error.response.data
			);
		} else {
			throw new PortfolioApiError(500);
		}
	}
}
