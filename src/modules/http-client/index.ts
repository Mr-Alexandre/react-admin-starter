import HttpClient from './http-client';
import jwtTokenInterceptor from './interceptors/jwt-token.interceptor';

const httpClient = new HttpClient({
	withCredentials: true,
});
httpClient.addInterceptor(jwtTokenInterceptor());

export { httpClient };
