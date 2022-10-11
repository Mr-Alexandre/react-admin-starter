import { boundClass } from 'autobind-decorator';
import type { IHttpClient } from '@modules/http-client/interface';
import {
	IAuthLoginByCredentialsData,
	TAuthGetSessionResponse,
	TAuthLoginByCredentialsResponse,
	TAuthLogoutResponse
} from '@domain/auth/interfaces/auth';

@boundClass
class AuthApiService {
	public readonly API_URL: string = 'https://localhost:8181';
	protected httpClient: IHttpClient;

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient;
	}

	public loginByCredentials(data: IAuthLoginByCredentialsData) {
		return this.httpClient.post<TAuthLoginByCredentialsResponse>(
			`${this.API_URL}/authenticate`,
			data
		);
	}

	public getSession() {
		return this.httpClient.get<TAuthGetSessionResponse>(
			'/api/auth/session'
		);
	}

	public logout() {
		return this.httpClient.post<TAuthLogoutResponse>('/api/auth/logout');
	}
}

export default AuthApiService;
