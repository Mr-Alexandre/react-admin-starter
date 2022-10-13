import { httpClientService } from '@services/http-client';
import PostApiService from '@domain/example/services/post/post.api-service';

const postApiService = new PostApiService(httpClientService);

export default postApiService;
