import { useMutation } from '@tanstack/react-query';
import {
	IHttpClientError,
	IHttpClientResponse,
} from '@modules/http-client/interface';
import exampleUserApiService from '@domain/example-form/services/user';
import { UseMutationOptions } from '@tanstack/react-query/src/types';
import { TTodoCreateResponse } from '@domain/example-todo/interfaces/todo';
import { IValidationError } from '@interfaces/validation-error';
import { IExampleUserCreateData } from '@domain/example-form/interfaces/example-user';

export const useCreateUser = (
	options?: UseMutationOptions<
		IHttpClientResponse<TTodoCreateResponse>,
		IHttpClientError<IValidationError<IExampleUserCreateData>>,
		IExampleUserCreateData
	>
) => {
	return useMutation(exampleUserApiService.create, options);
};
