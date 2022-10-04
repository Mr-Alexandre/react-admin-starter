import { boundClass } from 'autobind-decorator';
import type {
	IHttpClient,
	IHttpClientInterceptor,
	IHttpClientInterceptorIds,
	IHttpClientRequestConfig,
} from '@modules/http-client/interface';
import { IHttpClientResponse } from '@modules/http-client/interface';
import axios, { AxiosInstance } from 'axios';

@boundClass
class HttpClient implements IHttpClient {
	private axiosInstance: AxiosInstance;

	constructor(options?: IHttpClientRequestConfig) {
		this.axiosInstance = axios.create(options);
	}

	public get<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.get<T, R, D>(url, config);
	}

	public post<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.post<T, R, D>(url, data, config);
	}

	public put<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig
	): Promise<R> {
		return this.axiosInstance.put<T, R>(url, data, config);
	}

	public patch<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: IHttpClientRequestConfig
	): Promise<R> {
		return this.axiosInstance.patch<T, R>(url, data, config);
	}

	public delete<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.delete<T, R, D>(url, config);
	}

	public head<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.head<T, R, D>(url, config);
	}

	public options<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		url: string,
		config?: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.options<T, R, D>(url, config);
	}

	public request<T = unknown, R = IHttpClientResponse<T>, D = unknown>(
		config: IHttpClientRequestConfig<D>
	): Promise<R> {
		return this.axiosInstance.request<T, R, D>(config);
	}

	public addInterceptor(
		interceptor: IHttpClientInterceptor
	): IHttpClientInterceptorIds {
		if (interceptor?.request) {
			this.axiosInstance.interceptors.request.use(
				interceptor.request.onFulfilled,
				interceptor.request.onRejected
			);
		}
		if (interceptor?.response) {
			this.axiosInstance.interceptors.response.use(
				interceptor.response.onFulfilled,
				interceptor.response.onRejected
			);
		}
		return {};
	}

	public removeInterceptor(ids: IHttpClientInterceptorIds): void {
		if (ids.request != null) {
			this.axiosInstance.interceptors.request.eject(ids.request);
		}
		if (ids.response != null) {
			this.axiosInstance.interceptors.response.eject(ids.response);
		}
	}
}

export default HttpClient;
