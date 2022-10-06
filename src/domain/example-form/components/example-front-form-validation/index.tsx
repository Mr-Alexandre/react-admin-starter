import React, { FC, MouseEvent } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import exampleUserValidationScheme from '@domain/example-form/models/example-user.validation-scheme';
import { IExampleUser } from '@domain/example-form/interfaces/example-user';

const ExampleFrontFormValidation: FC = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors: formErrors },
		reset: formReset,
	} = useForm<IExampleUser>({
		resolver: joiResolver(exampleUserValidationScheme),
	});

	const handleValidFormSubmit = (data: IExampleUser) => {
		console.log(data);
	};

	const handleInvalidFormSubmit = (errors: FieldErrors<IExampleUser>) => {
		console.log(errors);
	};

	const handleClearClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		formReset();
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(
					handleValidFormSubmit,
					handleInvalidFormSubmit
				)}
			>
				<label htmlFor="firstName">First name</label>
				<input id="firstName" {...formRegister('firstName')} />
				<p>{formErrors.firstName?.message}</p>
				<br />
				<label htmlFor="lastName">Last name</label>
				<input id="lastName" {...formRegister('lastName')} />
				<p>{formErrors.lastName?.message}</p>
				<br />
				<label htmlFor="surname">Surname</label>
				<input id="surname" {...formRegister('surname')} />
				<p>{formErrors.surname?.message}</p>
				<br />
				<button type="submit">Submit</button>
				<button type="button" onClick={handleClearClick}>
					Clear
				</button>
			</form>
		</div>
	);
};

export default ExampleFrontFormValidation;
