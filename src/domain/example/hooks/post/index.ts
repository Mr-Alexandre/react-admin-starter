import postApiService from '@domain/example/services/post';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import {
	IPostChangeData,
	IPostCreateData,
	TPostCreateResponse,
	TPostDeleteResponse,
	TPostReadAllResponse,
	TPostReadResponse,
	TPostUpdateResponse
} from '@domain/example/interfaces/post';
import { thenAxiosResponseData } from '@utils/axios';
import { IHttpClientServiceError, IHttpClientServiceResponse } from '@services/http-client/interface';
import { IValidationError } from '@interfaces/validation-error';

export const usePostList = (
	options?: UseQueryOptions<TPostReadAllResponse>
) => {
	return useQuery<TPostReadAllResponse>(
		[postApiService.GET_ALL_REQUEST_KEY],
		() => thenAxiosResponseData(postApiService.getAll()),
		options
	);
};

export const usePost = (
	id: string,
	options?: UseQueryOptions<TPostReadResponse>
) => {
	return useQuery<TPostReadResponse>(
		[postApiService.GET_REQUEST_KEY, { id }],
		() => thenAxiosResponseData(postApiService.get(id)),
		options
	);
};

export const useCreateAddress = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TPostCreateResponse>,
		IHttpClientServiceError<IValidationError<IPostCreateData>>,
		IPostCreateData
		>
) => {
	return useMutation(postApiService.create, options);
};

export const useUpdatePost = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TPostUpdateResponse>,
		IHttpClientServiceError<IValidationError<IPostChangeData>>,
		IPostChangeData
		>
) => {
	return useMutation(postApiService.update, options);
};

export const useDeletePost = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TPostDeleteResponse>,
		unknown,
		string
		>
) => {
	return useMutation(postApiService.delete, options);
};
