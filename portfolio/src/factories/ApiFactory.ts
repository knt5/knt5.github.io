import Api from '@/api/Api';
import PortfolioApi from '@/api/PortfolioApi';
import AppError from '@/errors/AppError';

/** API factory */
export default class ApiFactory {
	private static readonly portfolioApi = new PortfolioApi(Api.Name.Portfolio);

	/** Get api instance */
	static get<T extends Api>(apiName: string): T {
		switch (apiName) {
			case Api.Name.Portfolio:
				return (this.portfolioApi as unknown) as T;
		}

		throw new AppError(`Unknown apiName: ${apiName}`);
	}
}
