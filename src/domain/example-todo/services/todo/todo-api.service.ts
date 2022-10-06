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
import type { IHttpClient } from '@modules/http-client/interface';

@boundClass
class TodoApiService {
	public readonly API_URL: string = '';
	public readonly GET_REQUEST_KEY: string = 'todo';
	public readonly GET_ALL_REQUEST_KEY: string = 'todos';

	protected httpClient: IHttpClient;

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient;
	}

	public create(data: IExampleTodoCreateData) {
		return this.httpClient.post<TTodoCreateResponse>(
			`${this.API_URL}/todo`,
			data
		);
	}

	public get(id: number) {
		return this.httpClient.get<TTodoReadResponse>(
			`${this.API_URL}/todo/${id}`
		);
	}

	public getAll() {
		return this.httpClient.get<TTodoReadAllResponse>(
			`${this.API_URL}/todo`
		);
	}

	public update(data: IExampleTodoChangeData) {
		return this.httpClient.patch<TTodoUpdateResponse>(
			`${this.API_URL}/todo/${data.id}`,
			data
		);
	}

	public delete(id: number) {
		return this.httpClient.delete<TTodoDeleteResponse>(
			`${this.API_URL}/todo/${id}`
		);
	}

	public deleteAll() {
		return this.httpClient.delete<TTodoDeleteAllResponse>(
			`${this.API_URL}/todo/`
		);
	}
}

export default TodoApiService;
