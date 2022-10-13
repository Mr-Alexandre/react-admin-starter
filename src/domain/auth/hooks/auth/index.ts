import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import {
	IAuthLoginByCredentialsData,
	TAuthGetSessionResponse,
	TAuthLoginByCredentialsResponse,
	TAuthLogoutResponse
} from '@domain/auth/interfaces/auth';
import { IHttpClientServiceError, IHttpClientServiceResponse } from '@services/http-client/interface';
import { IValidationError } from '@interfaces/validation-error';
import authApiService from '@domain/auth/services/auth';
import { thenAxiosResponseData } from '@utils/axios';

export const useLoginByCredentials = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TAuthLoginByCredentialsResponse>,
		IHttpClientServiceError<IValidationError<IAuthLoginByCredentialsData>>,
		IAuthLoginByCredentialsData
	>
) => {
	return useMutation(authApiService.loginByCredentials, {
		cacheTime: 0,
		...options,
	});
};

export const useLogout = (
	options?: UseMutationOptions<
		IHttpClientServiceResponse<TAuthLogoutResponse>,
		IHttpClientServiceError
	>
) => {
	return useMutation(authApiService.logout, {
		cacheTime: 0,
		...options,
	});
};

export const useSession = (
	options?: UseQueryOptions<TAuthGetSessionResponse>
) => {
	return useQuery<TAuthGetSessionResponse>(
		[],
		() => thenAxiosResponseData(authApiService.getSession()),
		{
			cacheTime: 0,
			...options,
		}
	);
};
