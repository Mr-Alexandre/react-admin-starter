import { boundClass } from 'autobind-decorator';
import type { IHttpClientService } from '@services/http-client/interface';
import { TTodoCreateResponse } from '@domain/example-todo/interfaces/todo';
import { IExampleUserCreateData } from '@domain/example-form/interfaces/example-user';
import { API_URL } from '@constants/envrionment';

@boundClass
class ExampleUserApiService {
	public readonly API_URL: string = API_URL;
	public readonly GET_REQUEST_KEY: string = 'user';
	public readonly GET_ALL_REQUEST_KEY: string = 'users';

	protected httpClientService: IHttpClientService;

	constructor(httpClientService: IHttpClientService) {
		this.httpClientService = httpClientService;
	}

	public create(data: IExampleUserCreateData) {
		return this.httpClientService.post<TTodoCreateResponse>(
			`${this.API_URL}/example-form`,
			data
		);
	}
}

export default ExampleUserApiService;
