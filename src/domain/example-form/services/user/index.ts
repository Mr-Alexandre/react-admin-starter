import ExampleUserApiService from '@domain/example-form/services/user/example-user-api.service';
import { httpClientService } from '@services/http-client';

const exampleUserApiService = new ExampleUserApiService(httpClientService);

export default exampleUserApiService;
