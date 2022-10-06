import { httpClient } from '@modules/http-client';
import TodoApiService from '@domain/example-todo/services/todo/todo-api.service';

const todoApiService = new TodoApiService(httpClient);

export default todoApiService;
