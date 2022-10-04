import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpClient {
	get<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	post<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	put<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	patch<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	delete<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	head<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	options<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R>;

	request<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		config: IHttpClientRequestConfig<D>
	): Promise<R>;

	addInterceptor(
		interceptor: IHttpClientInterceptor
	): IHttpClientInterceptorIds;

	removeInterceptor(ids: IHttpClientInterceptorIds): void;
}

export interface IHttpClientRequestConfig<D = unknown>
	extends AxiosRequestConfig<D> {
}

export interface IHttpClientResponse<T = unknown> extends AxiosResponse<T> {
}

export interface IHttpClientError<T = unknown, D = unknown>
	extends AxiosError<T, D> {
}

export interface IHttpClientInterceptorFunction {
	(): IHttpClientInterceptor;
}

export interface IHttpClientInterceptor {
	request?: IHttpClientInterceptorManager<IHttpClientRequestConfig>;
	response?: IHttpClientInterceptorManager<IHttpClientResponse>;
}

export interface IHttpClientInterceptorManager<T> {
	onFulfilled?: (value: T) => T | Promise<T>;
	onRejected?: (error: unknown) => unknown;
}

export interface IHttpClientInterceptorIds {
	request?: number;
	response?: number;
}
