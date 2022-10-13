import { IHttpClientServiceInterceptorFunction } from '../interface';
import { IHttpHeaders } from '@interfaces/http-headers';

const jwtTokenInterceptor: IHttpClientServiceInterceptorFunction = () => {
	return {
		request: {
			onFulfilled: (config) => {
				const newConfig = { ...config };
				const token = Math.random();
				(newConfig.headers as IHttpHeaders)[
					'Authorization'
				] = `JWT ${token}`;
				return newConfig;
			}
		}
	};
};

export default jwtTokenInterceptor;
