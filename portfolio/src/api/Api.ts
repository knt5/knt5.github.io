import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AppError from '@/errors/AppError';
import ApiCancelError from '@/errors/api/ApiCancelError';
import ApiManager from '@/managers/ApiManager';
import ApiRequest from '@/models/api/ApiRequest';
// import ApiRequestBody from '@/models/api/ApiRequestBody';
import ApiResponse from '@/models/api/ApiResponse';

/** Api */
abstract class Api {
	/** Axios instance */
	protected api?: AxiosInstance;

	/** Api name */
	protected readonly apiName: string;

	/** Default timeout (ms) */
	protected readonly timeout: number = 30000;

	/** Constructor */
	constructor(apiName: string) {
		this.apiName = apiName;
	}

	/** GET */
	async get<T extends ApiRequest, R extends ApiResponse>(
		url: string,
		request: T,
		options: Api.RequestOptions
	): Promise<R> {
		if (!this.api) {
			throw new AppError(`this.api not found`);
		}

		const cancelTokenSource = axios.CancelToken.source();
		ApiManager.add({
			apiName: this.apiName,
			cancelTokenSource,
			...options,
		});

		const cancelToken = cancelTokenSource.token;

		return this.api
			.get(url, { params: request, cancelToken })
			.then(response => {
				ApiManager.delete({ apiName: this.apiName, ...options });
				return response.data;
			})
			.catch(error => {
				ApiManager.delete({ apiName: this.apiName, ...options });
				throw error;
			});
	}

	/** POST */
	// async post<
	// 	T extends ApiRequest,
	// 	B extends ApiRequestBody,
	// 	R extends ApiResponse
	// >(
	// 	url: string,
	// 	request: T,
	// 	requestBody: B,
	// 	options: Api.RequestOptions
	// ): Promise<R> {
	// 	throw new AppError(`post() is not implemented`);
	// }

	/** Create axios instance */
	protected create(
		config?: AxiosRequestConfig,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handle?: (error: any) => void
	): AxiosInstance {
		const defaultConfig = {
			// baseURL: `https://`,
			timeout: this.timeout,
			validateStatus: this.validateStatus,
		};
		const api = axios.create(Object.assign(defaultConfig, config));

		// Response interceptor
		api.interceptors.response.use(
			response => response,
			error => (handle ? handle(error) : this.handle(error))
		);

		return api;
	}

	/** Response status validator */
	protected validateStatus(status: number): boolean {
		return status >= 200 && status < 400;
	}

	/** Error handler */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected handle(error: any): void {
		if (!error || typeof error !== `object` || !error.isAxiosError) {
			throw new AppError(`Unexpected error on api request: ${error}`);
		}
		if (axios.isCancel(error)) {
			throw new ApiCancelError();
		}
	}
}

namespace Api {
	export interface RequestOptions {
		repositoryName: string;
		repositoryInstanceId: number;
		requestName: string;
		requestId: number;
	}

	export enum Name {
		Portfolio = `Portfolio`,
	}
}

export default Api;
