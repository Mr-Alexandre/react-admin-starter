import Joi from 'joi';
import { ILoginByCredentials } from '@domain/auth/interfaces/login-by-credentials';

const loginByCredentialsValidationScheme = Joi.object<ILoginByCredentials>({
	username: Joi.string().required(),
	password: Joi.string().required(),
});

export default loginByCredentialsValidationScheme;
