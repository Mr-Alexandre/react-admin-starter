import { boundClass } from 'autobind-decorator';
import { IHttpClient } from '@modules/http-client/interface';
import {
	IExampleChangeData,
	IExampleCreateData,
	TExampleCreateResponse,
	TExampleDeleteResponse,
	TExampleReadAllResponse,
	TExampleReadResponse,
	TExampleUpdateResponse
} from '@interfaces/example';

@boundClass
class ExampleApiService {
	public readonly API_URL: string = '';
	public readonly GET_REQUEST_KEY: string = 'example';
	public readonly GET_ALL_REQUEST_KEY: string = 'examples';

	protected httpClient: IHttpClient;

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient;
	}

	public create(data: IExampleCreateData) {
		return this.httpClient.post<TExampleCreateResponse>(
			`${this.API_URL}/example`,
			data
		);
	}

	public get(id: number) {
		return this.httpClient.get<TExampleReadResponse>(
			`${this.API_URL}/example/${id}`
		);
	}

	public getAll() {
		return this.httpClient.get<TExampleReadAllResponse>(
			`${this.API_URL}/example`
		);
	}

	public update(data: IExampleChangeData) {
		return this.httpClient.patch<TExampleUpdateResponse>(
			`${this.API_URL}/example/${data.id}`,
			data
		);
	}

	public delete(id: number) {
		return this.httpClient.delete<TExampleDeleteResponse>(
			`${this.API_URL}/example/${id}`
		);
	}
}

export default ExampleApiService;
