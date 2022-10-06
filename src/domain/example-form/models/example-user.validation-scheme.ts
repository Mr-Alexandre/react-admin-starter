import Joi from 'joi';
import { PropType } from '@interfaces/properties';
import { IExampleUserCreateData } from '@domain/example-form/interfaces/example-user';

const exampleUserValidationScheme = Joi.object<IExampleUserCreateData>({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	surname: Joi.string().allow(null, ''),
	detail: Joi.object<PropType<IExampleUserCreateData, 'detail'>>({
		field1: Joi.string().required(),
		fields: Joi.array().items(
			Joi.object<PropType<IExampleUserCreateData, 'detail'>['fields'][0]>(
				{
					name: Joi.string().required(),
				}
			)
		),
	}),
});

export default exampleUserValidationScheme;
