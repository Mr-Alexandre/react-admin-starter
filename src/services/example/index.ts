import ExampleApiService from '@services/example/example-api.service';
import { httpClient } from '@modules/http-client';

const exampleApiService = new ExampleApiService(httpClient);

export default exampleApiService;
