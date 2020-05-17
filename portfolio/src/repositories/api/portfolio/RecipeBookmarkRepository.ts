import Api from '@/api/Api';
import ApiFactory from '@/factories/ApiFactory';
import GetRecipeBookmarkApiRequest from '@/models/api/portfolio/recipe/bookmark/GetRecipeBookmarkApiRequest';
import GetRecipeBookmarkApiResponse from '@/models/api/portfolio/recipe/bookmark/GetRecipeBookmarkApiResponse';
import ApiRepository from '@/repositories/api/ApiRepository';

/** RecipeBookmarkRepository */
class RecipeBookmarkRepository extends ApiRepository {
	/** PortfolioApi */
	private readonly portfolioApi = ApiFactory.get(Api.Name.Portfolio);

	/** Get swimming */
	async get(
		request: GetRecipeBookmarkApiRequest
	): Promise<GetRecipeBookmarkApiResponse> {
		return this.portfolioApi.get(
			`/build/api/recipe/bookmark.json`,
			request,
			this.$getRequestOptions(RecipeBookmarkRepository.RequestName.Get)
		);
	}
}

namespace RecipeBookmarkRepository {
	export enum RequestName {
		Get = `get`,
	}
}

export default RecipeBookmarkRepository;
