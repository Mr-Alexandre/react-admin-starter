import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpClient {
	get<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R>;

	post<T, R>(
		url: string,
		data?: unknown,
		config?: THttpClientRequestConfig
	): Promise<R>;

	put<T, R>(
		url: string,
		data?: unknown,
		config?: THttpClientRequestConfig
	): Promise<R>;

	patch<T, R>(
		url: string,
		data?: unknown,
		config?: THttpClientRequestConfig
	): Promise<R>;

	delete<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R>;

	head<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R>;

	options<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R>;

	request<T, R>(config: THttpClientRequestConfig): Promise<R>;

	addInterceptor(
		interceptor: THttpClientInterceptor
	): THttpClientInterceptorIds;

	removeInterceptor(ids: THttpClientInterceptorIds): void;
}

export type THttpClientRequestConfig = AxiosRequestConfig;
export type THttpClientResponse = AxiosResponse;
export type THttpClientError = AxiosError;

export type THttpClientInterceptorFunction = () => THttpClientInterceptor;

export type THttpClientInterceptor = {
	request?: THttpClientInterceptorManager<THttpClientRequestConfig>;
	response?: THttpClientInterceptorManager<THttpClientResponse>;
};

export type THttpClientInterceptorManager<T> = {
	onFulfilled?: (value: T) => T | Promise<T>;
	onRejected?: (error: unknown) => unknown;
};

export type THttpClientInterceptorIds = {
	request?: number;
	response?: number;
};
