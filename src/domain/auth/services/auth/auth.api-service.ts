import { boundClass } from 'autobind-decorator';
import type { IHttpClientService } from '@services/http-client/interface';
import {
	IAuthLoginByCredentialsData,
	TAuthGetSessionResponse,
	TAuthLoginByCredentialsResponse,
	TAuthLogoutResponse
} from '@domain/auth/interfaces/auth';
import { API_URL } from '@constants/envrionment';

@boundClass
class AuthApiService {
	public readonly API_URL: string = API_URL;
	protected httpClientService: IHttpClientService;

	constructor(httpClientService: IHttpClientService) {
		this.httpClientService = httpClientService;
	}

	public loginByCredentials(data: IAuthLoginByCredentialsData) {
		return this.httpClientService.post<TAuthLoginByCredentialsResponse>(
			`${this.API_URL}/authenticate`,
			data
		);
	}

	public getSession() {
		return this.httpClientService.get<TAuthGetSessionResponse>(
			'/api/auth/session'
		);
	}

	public logout() {
		return this.httpClientService.post<TAuthLogoutResponse>('/api/auth/logout');
	}
}

export default AuthApiService;
