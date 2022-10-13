import { boundClass } from 'autobind-decorator';
import { IHttpClientService } from '@services/http-client/interface';
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

	protected httpClientService: IHttpClientService;

	constructor(httpClientService: IHttpClientService) {
		this.httpClientService = httpClientService;
	}

	public create(data: IExampleCreateData) {
		return this.httpClientService.post<TExampleCreateResponse>(
			`${this.API_URL}/example`,
			data
		);
	}

	public get(id: number) {
		return this.httpClientService.get<TExampleReadResponse>(
			`${this.API_URL}/example/${id}`
		);
	}

	public getAll() {
		return this.httpClientService.get<TExampleReadAllResponse>(
			`${this.API_URL}/example`
		);
	}

	public update(data: IExampleChangeData) {
		return this.httpClientService.patch<TExampleUpdateResponse>(
			`${this.API_URL}/example/${data.id}`,
			data
		);
	}

	public delete(id: number) {
		return this.httpClientService.delete<TExampleDeleteResponse>(
			`${this.API_URL}/example/${id}`
		);
	}
}

export default ExampleApiService;
