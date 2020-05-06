import Api from '@/api/Api';
import ApiFactory from '@/factories/ApiFactory';
import GetSwimmingApiRequest from '@/models/api/portfolio/swimming/GetSwimmingApiRequest';
import GetSwimmingApiResponse from '@/models/api/portfolio/swimming/GetSwimmingApiResponse';
import ApiRepository from '@/repositories/api/ApiRepository';

/** SwimmingRepository */
class SwimmingRepository extends ApiRepository {
	/** PortfolioApi */
	private readonly portfolioApi = ApiFactory.get(Api.Name.Portfolio);

	/** Get swimming */
	async get(request: GetSwimmingApiRequest): Promise<GetSwimmingApiResponse> {
		return this.portfolioApi.get(
			`/build/api/swimming.json`,
			request,
			this.$getRequestOptions(SwimmingRepository.RequestName.Get)
		);
	}
}

namespace SwimmingRepository {
	export enum RequestName {
		Get = `get`,
	}
}

export default SwimmingRepository;
