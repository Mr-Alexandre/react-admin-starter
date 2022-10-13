import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import postApiService from '@domain/example/services/post';
import { thenAxiosResponseData } from '@utils/axios';
import { IHttpClientServiceError, IHttpClientServiceResponse } from '@services/http-client/interface';
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
		IHttpClientServiceResponse<TExampleCreateResponse>,
		IHttpClientServiceError<IValidationError<IExampleCreateData>>,
		IExampleCreateData
		>
) => {
	return useMutation(exampleApiService.create, options);
};

export const useUpdateExample = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TExampleUpdateResponse>,
		IHttpClientServiceError<IValidationError<IExampleChangeData>>,
		IExampleChangeData
		>
) => {
	return useMutation(exampleApiService.update, options);
};

export const useDeleteExample = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TExampleDeleteResponse>,
		unknown,
		number
		>
) => {
	return useMutation(exampleApiService.delete, options);
};

