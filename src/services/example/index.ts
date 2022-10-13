import ExampleApiService from '@services/example/example-api.service';
import { httpClientService } from '@services/http-client';

const exampleApiService = new ExampleApiService(httpClientService);

export default exampleApiService;
