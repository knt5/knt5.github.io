import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** GetRecipeBookmarkApiResponse */
interface GetRecipeBookmarkApiResponse extends PortfolioApiResponse {
	/** Bookmark list */
	bookmarks: GetRecipeBookmarkApiResponse.Bookmark[];
}

namespace GetRecipeBookmarkApiResponse {
	/** Bookmark */
	export interface Bookmark {
		/** Created date */
		createdAt: string;

		/** Creator */
		createdBy: string;

		/** Updated date */
		updatedAt: string;

		/** Category */
		category: string;

		/** Recipe title */
		title: string;

		/** Recipe source site */
		site: string;

		/** Recipe URL */
		url: string;

		/** Recipe image URL */
		imageUrl?: string;
	}
}

export default GetRecipeBookmarkApiResponse;
