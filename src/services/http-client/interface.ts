import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpClientService {
	get<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	post<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	put<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	patch<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	delete<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	head<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	options<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	request<T = unknown, R = IHttpClientServiceResponse<T>, D = unknown>(
		config: IHttpClientServiceRequestConfig<D>
	): Promise<R>;

	addInterceptor(
		interceptor: IHttpClientServiceInterceptor
	): IHttpClientServiceInterceptorIds;

	removeInterceptor(ids: IHttpClientServiceInterceptorIds): void;
}

export interface IHttpClientServiceRequestConfig<D = unknown>
	extends AxiosRequestConfig<D> {}

export interface IHttpClientServiceResponse<T = unknown> extends AxiosResponse<T> {}

export interface IHttpClientServiceError<T = unknown, D = unknown>
	extends AxiosError<T, D> {}

export interface IHttpClientServiceInterceptorFunction {
	():IHttpClientServiceInterceptor;
}

export interface IHttpClientServiceInterceptor {
	request?: IHttpClientInterceptorManager<IHttpClientServiceRequestConfig>;
	response?: IHttpClientInterceptorManager<IHttpClientServiceResponse>;
}

export interface IHttpClientInterceptorManager<T> {
	onFulfilled?: (value: T) => T | Promise<T>;
	onRejected?: (error: unknown) => unknown;
}

export interface IHttpClientServiceInterceptorIds {
	request?: number;
	response?: number;
}
