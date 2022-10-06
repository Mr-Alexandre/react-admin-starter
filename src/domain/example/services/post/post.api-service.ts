import { boundClass } from 'autobind-decorator';
import type { IHttpClient } from '@modules/http-client/interface';
import {
	IPostChangeData,
	IPostCreateData,
	TPostCreateResponse, TPostDeleteResponse,
	TPostReadAllResponse,
	TPostReadResponse, TPostUpdateResponse
} from '@domain/example/interfaces/post';

@boundClass
class PostApiService {
	public readonly API_URL: string = 'https://jsonplaceholder.typicode.com';
	public readonly GET_REQUEST_KEY: string = 'post';
	public readonly GET_ALL_REQUEST_KEY: string = 'posts';

	protected httpClient: IHttpClient;

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient;
	}

	public create(data: IPostCreateData) {
		return this.httpClient.post<TPostCreateResponse>(
			`${this.API_URL}/customers/current/addresses/`,
			data
		);
	}

	public get(id: string) {
		return this.httpClient.get<TPostReadResponse>(
			`${this.API_URL}/posts/${id}`
		);
	}

	public getAll() {
		return this.httpClient.get<TPostReadAllResponse>(
			`${this.API_URL}/posts`
		);
	}

	public update(data: IPostChangeData) {
		return this.httpClient.put<TPostUpdateResponse>(
			`${this.API_URL}/posts/${data.id}`,
			data
		);
	}

	public delete(id: string) {
		return this.httpClient.delete<TPostDeleteResponse>(
			`${this.API_URL}/posts/${id}`
		);
	}
}

export default PostApiService;
