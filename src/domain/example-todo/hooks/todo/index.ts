import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import todoApiService from '@domain/example-todo/services/todo';
import { thenAxiosResponseData } from '@utils/axios';
import { toNumber } from '@utils/number';
import {
	IExampleTodoChangeData,
	IExampleTodoCreateData,
	TTodoCreateResponse,
	TTodoDeleteAllResponse,
	TTodoDeleteResponse,
	TTodoReadAllResponse,
	TTodoReadResponse,
	TTodoUpdateResponse
} from '@domain/example-todo/interfaces/todo';
import { UseMutationOptions } from '@tanstack/react-query/src/types';
import { IHttpClientServiceError, IHttpClientServiceResponse } from '@services/http-client/interface';
import { IValidationError } from '@interfaces/validation-error';

export const useTodoList = (
	options?: UseQueryOptions<TTodoReadAllResponse>
) => {
	return useQuery<TTodoReadAllResponse>(
		[todoApiService.GET_ALL_REQUEST_KEY],
		() => thenAxiosResponseData(todoApiService.getAll()),
		options
	);
};

export const useTodo = (
	id: number,
	options?: UseQueryOptions<TTodoReadResponse>
) => {
	return useQuery<TTodoReadResponse>(
		[todoApiService.GET_REQUEST_KEY, id],
		() => thenAxiosResponseData(todoApiService.get(toNumber(id))),
		options
	);
};

export const useCreateTodo = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TTodoCreateResponse>,
		IHttpClientServiceError<IValidationError<IExampleTodoCreateData>>,
		IExampleTodoCreateData
	>
) => {
	return useMutation(todoApiService.create, options);
};

export const useUpdateTodo = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TTodoUpdateResponse>,
		IHttpClientServiceError<IValidationError<IExampleTodoChangeData>>,
		IExampleTodoChangeData
	>
) => {
	return useMutation(todoApiService.update, options);
};

export const useDeleteTodo = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TTodoDeleteResponse>,
		unknown,
		number
	>
) => {
	return useMutation(todoApiService.delete, options);
};

export const useDeleteAllTodo = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TTodoDeleteAllResponse>,
		unknown,
		void
	>
) => {
	return useMutation(todoApiService.deleteAll, options);
};
