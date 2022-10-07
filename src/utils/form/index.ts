import { IValidationErrorField } from '@interfaces/validation-error';
import { UseFormSetError } from 'react-hook-form';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setServerErrors<T extends Record<string, any>>(
	errors: IValidationErrorField<T>[],
	setError: UseFormSetError<T>
) {
	errors?.forEach((error) => {
		error.fields?.forEach((fieldName) => {
			setError(fieldName, {
				type: 'server',
				message: error.detail
			});
		});
	});
}
