import { boundClass } from 'autobind-decorator';
import type { IHttpClient } from '@modules/http-client/interface';
import { TTodoCreateResponse } from '@domain/example-todo/interfaces/todo';
import { IExampleUserCreateData } from '@domain/example-form/interfaces/example-user';

@boundClass
class ExampleUserApiService {
	public readonly API_URL: string = '';
	public readonly GET_REQUEST_KEY: string = 'user';
	public readonly GET_ALL_REQUEST_KEY: string = 'users';

	protected httpClient: IHttpClient;

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient;
	}

	public create(data: IExampleUserCreateData) {
		return this.httpClient.post<TTodoCreateResponse>(
			`${this.API_URL}/example-form`,
			data
		);
	}
}

export default ExampleUserApiService;
