import PortfolioApiResponse from '@/models/api/portfolio/PortfolioApiResponse';

/** GetSwimmingApiResponse */
export default interface GetSwimmingApiResponse extends PortfolioApiResponse {
	/** Swimming record list */
	records: Record[];
}

/** Swimming record */
interface Record {
	/** Year */
	year: number;

	/** Swim distance */
	distance: number;
}
