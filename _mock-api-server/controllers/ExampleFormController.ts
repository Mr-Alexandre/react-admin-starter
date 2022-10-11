import { Body, Controller, Post, Req, Res } from 'routing-controllers';
import {
	IExampleUserCreateData,
	TExampleUserCreateResponse,
} from '@domain/example-form/interfaces/example-user';
import { IValidationError } from '@interfaces/validation-error';
import { Request, Response } from 'express';

@Controller()
export default class ExampleFormController {
	@Post('/example-form')
	create(
		@Req() request: Request,
		@Res() response: Response,
		@Body() user: IExampleUserCreateData
	): TExampleUserCreateResponse | IValidationError<IExampleUserCreateData> {
		const errorScheme = {
			title: 'Validation error',
			titleKey: 'validation.error',
			errors: [
				{
					title: 'Invalid customer personal-info information data',
					titleKey: 'errors.validation.customer.personalInfo.invalid',
					detail: 'First name is required',
					detailKey:
						'errors.validation.customer.personalInfo.invalid.lastName.missing',
					fields: [
						'firstName',
						'detail.field1',
						'detail.fields[0].name',
					],
				},
				{
					title: 'Invalid customer personal-info information data',
					titleKey: 'errors.validation.customer.personalInfo.invalid',
					detail: 'Last name is required',
					detailKey:
						'errors.validation.customer.personalInfo.invalid.lastName.missing',
					fields: ['lastName'],
				},
			],
		} as IValidationError<IExampleUserCreateData>;
		if (!user.detail.fields?.length) {
			errorScheme.errors.push({
				title: 'Invalid customer personal-info information data',
				titleKey: 'errors.validation.customer.personalInfo.invalid',
				detail: 'fields is not be empty',
				detailKey:
					'errors.validation.customer.personalInfo.invalid.lastName.missing',
				fields: ['detail.fields'],
			});
		}
		response.status(400);
		return errorScheme;
	}
}
