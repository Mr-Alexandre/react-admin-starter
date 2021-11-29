import axios, { AxiosInstance } from 'axios';
import {
	IHttpClient,
	THttpClientInterceptor,
	THttpClientInterceptorIds,
	THttpClientRequestConfig
} from './http-client.interface';

export default class HttpClient implements IHttpClient {
	private axiosInstance: AxiosInstance;

	constructor(options?: THttpClientRequestConfig) {
		this.axiosInstance = axios.create(options);
	}

	public get<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.get<T, R>(url, config);
	}

	public post<T, R>(url: string, data?: unknown, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.post<T, R>(url, data, config);
	}

	public put<T, R>(url: string, data?: unknown, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.put<T, R>(url, data, config);
	}

	public patch<T, R>(url: string, data?: unknown, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.patch<T, R>(url, data, config)
	}

	public delete<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.delete<T, R>(url, config);
	}

	public head<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.head<T, R>(url, config);
	}

	public options<T, R>(url: string, config?: THttpClientRequestConfig): Promise<R> {
		return this.axiosInstance.options<T, R>(url, config);
	}

	public request<T, R>(config: THttpClientRequestConfig) {
		return this.axiosInstance.request<T, R>(config);
	}

	public addInterceptor(interceptor: THttpClientInterceptor): THttpClientInterceptorIds {
		if (interceptor?.request) {
			this.axiosInstance.interceptors.request.use(
				interceptor.request.onFulfilled,
				interceptor.request.onRejected,
			);
		}
		if (interceptor?.response) {
			this.axiosInstance.interceptors.response.use(
				interceptor.response.onFulfilled,
				interceptor.response.onRejected,
			);
		}
		return {}
	}

	public removeInterceptor(ids: THttpClientInterceptorIds): void {
		if (ids.request != null) {
			this.axiosInstance.interceptors.request.eject(ids.request);
		}
		if (ids.response != null) {
			this.axiosInstance.interceptors.response.eject(ids.response);
		}
	}
}
