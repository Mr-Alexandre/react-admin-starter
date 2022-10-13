import { httpClientService } from '@services/http-client';
import TodoApiService from '@domain/example-todo/services/todo/todo-api.service';

const todoApiService = new TodoApiService(httpClientService);

export default todoApiService;
