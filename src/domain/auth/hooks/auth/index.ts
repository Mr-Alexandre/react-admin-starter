import {
	useMutation,
	UseMutationOptions,
	useQuery,
	UseQueryOptions,
} from '@tanstack/react-query';
import {
	IAuthLoginByCredentialsData,
	TAuthGetSessionResponse,
	TAuthLoginByCredentialsResponse,
	TAuthLogoutResponse,
} from '@domain/auth/interfaces/auth';
import {
	IHttpClientError,
	IHttpClientResponse,
} from '@modules/http-client/interface';
import { IValidationError } from '@interfaces/validation-error';
import authApiService from '@domain/auth/services/auth';
import { thenAxiosResponseData } from '@utils/axios';

export const useLoginByCredentials = (
	options?: UseMutationOptions<
		IHttpClientResponse<TAuthLoginByCredentialsResponse>,
		IHttpClientError<IValidationError<IAuthLoginByCredentialsData>>,
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
		IHttpClientResponse<TAuthLogoutResponse>,
		IHttpClientError
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
