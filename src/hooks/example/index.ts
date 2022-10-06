import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import postApiService from '@domain/example/services/post';
import { thenAxiosResponseData } from '@utils/axios';
import { IHttpClientError, IHttpClientResponse } from '@modules/http-client/interface';
import { IValidationError } from '@interfaces/validation-error';
import {
	IExampleChangeData,
	IExampleCreateData,
	TExampleCreateResponse,
	TExampleDeleteResponse,
	TExampleReadAllResponse,
	TExampleReadResponse,
	TExampleUpdateResponse
} from '@interfaces/example';
import exampleApiService from '@services/example';

export const useExampleList = (
	options?: UseQueryOptions<TExampleReadAllResponse>
) => {
	return useQuery<TExampleReadAllResponse>(
		[postApiService.GET_ALL_REQUEST_KEY],
		() => thenAxiosResponseData(exampleApiService.getAll()),
		options
	);
};

export const useExample = (
	id: number,
	options?: UseQueryOptions<TExampleReadResponse>
) => {
	return useQuery<TExampleReadResponse>(
		[postApiService.GET_REQUEST_KEY, { id }],
		() => thenAxiosResponseData(exampleApiService.get(id)),
		options
	);
};

export const useCreateExample = (
	options?: UseMutationOptions<
		IHttpClientResponse<TExampleCreateResponse>,
		IHttpClientError<IValidationError<IExampleCreateData>>,
		IExampleCreateData
		>
) => {
	return useMutation(exampleApiService.create, options);
};

export const useUpdateExample = (
	options?: UseMutationOptions<
		IHttpClientResponse<TExampleUpdateResponse>,
		IHttpClientError<IValidationError<IExampleChangeData>>,
		IExampleChangeData
		>
) => {
	return useMutation(exampleApiService.update, options);
};

export const useDeleteExample = (
	options?: UseMutationOptions<
		IHttpClientResponse<TExampleDeleteResponse>,
		unknown,
		number
		>
) => {
	return useMutation(exampleApiService.delete, options);
};

