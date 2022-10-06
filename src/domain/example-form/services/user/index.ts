import ExampleUserApiService from '@domain/example-form/services/user/example-user-api.service';
import { httpClient } from '@modules/http-client';

const exampleUserApiService = new ExampleUserApiService(httpClient);

export default exampleUserApiService;
