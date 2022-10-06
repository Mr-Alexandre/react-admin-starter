import Joi from 'joi';
import { IPost } from '@domain/example/interfaces/post';

const postValidationScheme = Joi.object<IPost>({
	userId: Joi.number().required(),
	id: Joi.number().required(),
	title: Joi.string().allow(null, ''),
	body: Joi.string().allow(null, ''),
});

export default postValidationScheme;
