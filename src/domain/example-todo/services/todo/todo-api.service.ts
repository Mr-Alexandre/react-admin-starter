import { boundClass } from 'autobind-decorator';
import {
	IExampleTodoChangeData,
	IExampleTodoCreateData,
	TTodoCreateResponse,
	TTodoDeleteAllResponse,
	TTodoDeleteResponse,
	TTodoReadAllResponse,
	TTodoReadResponse,
	TTodoUpdateResponse
} from '@domain/example-todo/interfaces/todo';
import type { IHttpClientService } from '@services/http-client/interface';
import { API_URL } from '@constants/envrionment';

@boundClass
class TodoApiService {
	public readonly API_URL: string = API_URL;
	public readonly GET_REQUEST_KEY: string = 'todo';
	public readonly GET_ALL_REQUEST_KEY: string = 'todos';

	protected httpClientService: IHttpClientService;

	constructor(httpClientService: IHttpClientService) {
		this.httpClientService = httpClientService;
	}

	public create(data: IExampleTodoCreateData) {
		return this.httpClientService.post<TTodoCreateResponse>(
			`${this.API_URL}/todo`,
			data
		);
	}

	public get(id: number) {
		return this.httpClientService.get<TTodoReadResponse>(
			`${this.API_URL}/todo/${id}`
		);
	}

	public getAll() {
		return this.httpClientService.get<TTodoReadAllResponse>(
			`${this.API_URL}/todo`
		);
	}

	public update(data: IExampleTodoChangeData) {
		return this.httpClientService.patch<TTodoUpdateResponse>(
			`${this.API_URL}/todo/${data.id}`,
			data
		);
	}

	public delete(id: number) {
		return this.httpClientService.delete<TTodoDeleteResponse>(
			`${this.API_URL}/todo/${id}`
		);
	}

	public deleteAll() {
		return this.httpClientService.delete<TTodoDeleteAllResponse>(
			`${this.API_URL}/todo/`
		);
	}
}

export default TodoApiService;
