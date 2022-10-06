import { httpClient } from '@modules/http-client';
import PostApiService from '@domain/example/services/post/post.api-service';

const postApiService = new PostApiService(httpClient);

export default postApiService;
