import { boundClass } from 'autobind-decorator';
import type { IHttpClientService } from '@services/http-client/interface';
import {
	IPostChangeData,
	IPostCreateData,
	TPostCreateResponse,
	TPostDeleteResponse,
	TPostReadAllResponse,
	TPostReadResponse,
	TPostUpdateResponse
} from '@domain/example/interfaces/post';

@boundClass
class PostApiService {
	public readonly API_URL: string = 'https://jsonplaceholder.typicode.com';
	public readonly GET_REQUEST_KEY: string = 'post';
	public readonly GET_ALL_REQUEST_KEY: string = 'posts';

	protected httpClientService: IHttpClientService;

	constructor(httpClientService: IHttpClientService) {
		this.httpClientService = httpClientService;
	}

	public create(data: IPostCreateData) {
		return this.httpClientService.post<TPostCreateResponse>(
			`${this.API_URL}/customers/current/addresses/`,
			data
		);
	}

	public get(id: string) {
		return this.httpClientService.get<TPostReadResponse>(
			`${this.API_URL}/posts/${id}`
		);
	}

	public getAll() {
		return this.httpClientService.get<TPostReadAllResponse>(
			`${this.API_URL}/posts`
		);
	}

	public update(data: IPostChangeData) {
		return this.httpClientService.put<TPostUpdateResponse>(
			`${this.API_URL}/posts/${data.id}`,
			data
		);
	}

	public delete(id: string) {
		return this.httpClientService.delete<TPostDeleteResponse>(
			`${this.API_URL}/posts/${id}`
		);
	}
}

export default PostApiService;
