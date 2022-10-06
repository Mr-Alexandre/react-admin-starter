import { FieldPath } from 'react-hook-form';

export interface IValidationError<TFields extends Record<string, any>> {
	title: string;
	titleKey: string;
	errors: IValidationErrorField<TFields>[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IValidationErrorField<TFields extends Record<string, any>> {
	title: string;
	titleKey: string;
	detail: string;
	detailKey: string;
	fields: FieldPath<TFields>[];
}
