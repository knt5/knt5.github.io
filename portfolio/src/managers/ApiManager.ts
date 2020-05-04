import { CancelTokenSource } from 'axios';

/** API manager */
class ApiManager {
	/** Api store */
	private static readonly store: ApiManager.ApiStore = {};

	/** Add to api store */
	static add(options: ApiManager.AddOptions): void {
		if (!this.store[options.apiName]) {
			this.store[options.apiName] = {};
		}
		if (!this.store[options.apiName][options.repositoryName]) {
			this.store[options.apiName][options.repositoryName] = {};
		}
		if (
			!this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			]
		) {
			this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			] = {};
		}
		if (
			!this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			][options.requestName]
		) {
			this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			][options.requestName] = {};
		}
		this.store[options.apiName][options.repositoryName][
			options.repositoryInstanceId
		][options.requestName][options.requestId] = new ApiManager.Request(
			options.cancelTokenSource
		);
	}

	/** Delete from api store */
	static delete(options: ApiManager.DeleteOptions): boolean {
		// Cannot use optional chain...
		if (!this.store[options.apiName]) {
			return false;
		}
		if (!this.store[options.apiName][options.repositoryName]) {
			return false;
		}
		if (
			!this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			]
		) {
			return false;
		}
		if (
			!this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			][options.requestName]
		) {
			return false;
		}
		if (
			!this.store[options.apiName][options.repositoryName][
				options.repositoryInstanceId
			][options.requestName][options.requestId]
		) {
			return false;
		}

		delete this.store[options.apiName][options.repositoryName][
			options.repositoryInstanceId
		][options.requestName][options.requestId];

		return true;
	}

	/** Cancel api request */
	static cancel(options: ApiManager.CancelOptions): void {
		if (options.apiName === undefined) {
			this.cancelAll();
		} else if (options.repositoryName === undefined) {
			this.cancelApi(this.store[options.apiName]);
		} else if (options.repositoryInstanceId === undefined) {
			this.cancelRepository(
				this.store[options.apiName][options.repositoryName]
			);
		} else if (options.requestName === undefined) {
			this.cancelRepositoryInstance(
				this.store[options.apiName][options.repositoryName][
					options.repositoryInstanceId
				]
			);
		} else if (options.requestId === undefined) {
			this.cancelRequest(
				this.store[options.apiName][options.repositoryName][
					options.repositoryInstanceId
				][options.requestName]
			);
		} else {
			this.cancelRequestInstance(
				options.requestId,
				this.store[options.apiName][options.repositoryName][
					options.repositoryInstanceId
				][options.requestName]
			);
		}
	}

	private static cancelAll(): void {
		Object.keys(this.store).forEach(apiName => {
			this.cancelApi(this.store[apiName]);
		});
	}

	private static cancelApi(repositoryMap: ApiManager.RepositoryMap): void {
		Object.keys(repositoryMap).forEach(repositoryName => {
			this.cancelRepository(repositoryMap[repositoryName]);
		});
	}

	private static cancelRepository(
		repositoryInstanceMap: ApiManager.RepositoryInstanceMap
	): void {
		Object.keys(repositoryInstanceMap).forEach(repositoryInstanceId => {
			this.cancelRepositoryInstance(
				repositoryInstanceMap[+repositoryInstanceId]
			);
		});
	}

	private static cancelRepositoryInstance(
		requestMap: ApiManager.RequestMap
	): void {
		Object.keys(requestMap).forEach(requestName => {
			this.cancelRequest(requestMap[requestName]);
		});
	}

	private static cancelRequest(
		requestInstanceMap: ApiManager.RequestInstanceMap
	): void {
		Object.keys(requestInstanceMap).forEach(requestId => {
			this.cancelRequestInstance(+requestId, requestInstanceMap);
		});
	}

	private static cancelRequestInstance(
		requestId: number,
		requestInstanceMap: ApiManager.RequestInstanceMap
	): void {
		const request = requestInstanceMap[requestId];
		if (request && request.cancelTokenSource) {
			request.cancelTokenSource.cancel();
			delete request.cancelTokenSource;
			delete requestInstanceMap[requestId];
		}
	}
}

namespace ApiManager {
	export interface ApiStore {
		[apiName: string]: RepositoryMap;
	}

	export interface RepositoryMap {
		[repositoryName: string]: RepositoryInstanceMap;
	}

	export interface RepositoryInstanceMap {
		[repositoryInstanceId: number]: RequestMap;
	}

	export interface RequestMap {
		[requestName: string]: RequestInstanceMap;
	}

	export interface RequestInstanceMap {
		[requestId: number]: Request;
	}

	export class Request {
		cancelTokenSource: CancelTokenSource;
		constructor(cancelTokenSource: CancelTokenSource) {
			this.cancelTokenSource = cancelTokenSource;
		}
	}

	export interface AddOptions {
		apiName: string;
		repositoryName: string;
		repositoryInstanceId: number;
		requestName: string;
		requestId: number;
		cancelTokenSource: CancelTokenSource;
	}

	export interface DeleteOptions {
		apiName: string;
		repositoryName: string;
		repositoryInstanceId: number;
		requestName: string;
		requestId: number;
	}

	export interface CancelOptions {
		apiName?: string;
		repositoryName?: string;
		repositoryInstanceId?: number;
		requestName?: string;
		requestId?: number;
	}
}

export default ApiManager;
