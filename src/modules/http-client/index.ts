import HttpClient from './http-client';
import { environment } from '@environment';
import jwtTokenInterceptor from './interceptors/jwt-token.interceptor';

const httpClient = new HttpClient({
	baseURL: environment.apiURL,
});
httpClient.addInterceptor(jwtTokenInterceptor());

const httpClientJsonPlaceholder = new HttpClient({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export {
	httpClient,
	httpClientJsonPlaceholder
}
