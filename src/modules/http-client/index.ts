import HttpClient from './http-client';
import { index } from '@environment';
import jwtTokenInterceptor from './interceptors/jwt-token.interceptor';

const httpClient = new HttpClient({
	baseURL: index.apiURL,
});
httpClient.addInterceptor(jwtTokenInterceptor());

const httpClientJsonPlaceholder = new HttpClient({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export { httpClient, httpClientJsonPlaceholder };
