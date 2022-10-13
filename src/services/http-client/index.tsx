import HttpClientService from '@services/http-client/http-client.service';
import jwtTokenInterceptor from '@services/http-client/interceptors/jwt-token.interceptor';

const httpClientService = new HttpClientService({
	withCredentials: true,
});
httpClientService.addInterceptor(jwtTokenInterceptor());

export { httpClientService };
