import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** GetSwimmingApiResponse */
interface GetSwimmingApiResponse extends PortfolioApiResponse {
	/** Swimming record list */
	records: GetSwimmingApiResponse.Record[];
}

namespace GetSwimmingApiResponse {
	/** Swimming record */
	export interface Record {
		/** Year */
		year: number;

		/** Swim distance */
		distance: number;
	}
}

export default GetSwimmingApiResponse;
