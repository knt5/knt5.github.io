import Api from '@/api/Api';
import Repository from '@/repositories/Repository';

/** Repository instance ID */
let instanceId = 0;

/** API repository */
abstract class ApiRepository extends Repository {
	/** Instance ID */
	private instanceId: number;

	/** Request ID */
	private requestId = 0;

	/** Base request options */
	private baseRequestOptions: ApiRepository.BaseRequestOptions;

	constructor(repositoryName: string) {
		super();

		// Instance ID
		if (instanceId >= Number.MAX_SAFE_INTEGER) {
			instanceId = 0;
		} else {
			instanceId++;
		}
		this.instanceId = instanceId;

		// Base request options
		this.baseRequestOptions = {
			repositoryName,
			repositoryInstanceId: this.instanceId,
		};
	}

	protected $getRequestOptions(requestName: string): Api.RequestOptions {
		// Request ID
		if (this.requestId >= Number.MAX_SAFE_INTEGER) {
			this.requestId = 0;
		} else {
			this.requestId++;
		}

		// Request options
		return {
			...this.baseRequestOptions,
			requestName,
			requestId: this.requestId,
		};
	}
}

namespace ApiRepository {
	export interface BaseRequestOptions {
		repositoryName: string;
		repositoryInstanceId: number;
	}

	export enum Name {
		// PortfolioApi
		Swimming = `Swimming`,
		RecipeBookmark = `RecipeBookmark`,
	}
}

export default ApiRepository;
