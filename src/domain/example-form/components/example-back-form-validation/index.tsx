import React, { FC, MouseEvent } from 'react';
import { FieldErrors, useFieldArray, useForm } from 'react-hook-form';
import exampleUserValidationScheme from '@domain/example-form/models/example-user.validation-scheme';
import { useCreateUser } from '@domain/example-form/hooks/user';
import { setServerErrors } from '@utils/form';
import styles from './index.module.scss';
import { IExampleUserCreateData } from '@domain/example-form/interfaces/example-user';
import { joiResolver } from '@hookform/resolvers/joi';

const ExampleBackFormValidation: FC = () => {
	const {
		control: formControl,
		register: formRegister,
		handleSubmit,
		formState: { errors: formErrors },
		reset: formReset,
		setError: formSetError,
	} = useForm<IExampleUserCreateData>({
		resolver: joiResolver(exampleUserValidationScheme),
	});
	const { fields: detailFields, append: detailFieldsAppend } = useFieldArray({
		control: formControl,
		name: 'detail.fields',
	});
	const { mutate: createUser, isLoading } = useCreateUser({
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.log(error);
			if (error.response?.data?.errors) {
				setServerErrors(error.response.data.errors, formSetError);
			}
		},
	});

	const handleValidFormSubmit = (data: IExampleUserCreateData) => {
		createUser(data);
	};

	const handleInvalidFormSubmit = (
		errors: FieldErrors<IExampleUserCreateData>
	) => {
		console.log(errors);
	};

	const handleClearClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		formReset();
	};

	const handleAddFieldItemClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		detailFieldsAppend({
			name: '',
		});
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(
					handleValidFormSubmit,
					handleInvalidFormSubmit
				)}
			>
				<p>{isLoading ? 'Loading...' : ''}</p>
				<label htmlFor="firstName">First name</label>
				<input id="firstName" {...formRegister('firstName')} />
				<p className={styles.error}>{formErrors.firstName?.message}</p>
				<br />
				<label htmlFor="lastName">Last name</label>
				<input id="lastName" {...formRegister('lastName')} />
				<p className={styles.error}>{formErrors.lastName?.message}</p>
				<br />
				<label htmlFor="surname">Surname</label>
				<input id="surname" {...formRegister('surname')} />
				<p className={styles.error}>{formErrors.surname?.message}</p>
				<br />
				<fieldset>
					<legend>Detail</legend>
					<label htmlFor="detail.field1">Field1</label>
					<input
						id="detail.field1"
						{...formRegister('detail.field1')}
					/>
					<p className={styles.error}>
						{formErrors.detail?.field1?.message}
					</p>
					<br />
					<p>Fields</p>
					<p className={styles.error}>
						{formErrors.detail?.fields?.message}
					</p>
					<ul>
						{detailFields.map((field, index) => (
							<li key={field.id}>
								<label htmlFor={'detail.fields.' + index}>
									Name
								</label>
								<input
									id={'detail.fields.' + index}
									{...formRegister(
										`detail.fields.${index}.name`
									)}
								/>
								<p className={styles.error}>
									{
										formErrors.detail?.fields?.[index]?.name
											?.message
									}
								</p>
								<br />
							</li>
						))}
						<button onClick={handleAddFieldItemClick}>Add</button>
					</ul>
				</fieldset>
				<button type="submit" disabled={isLoading}>
					Submit
				</button>
				<button
					type="button"
					onClick={handleClearClick}
					disabled={isLoading}
				>
					Clear
				</button>
			</form>
		</div>
	);
};

export default ExampleBackFormValidation;
