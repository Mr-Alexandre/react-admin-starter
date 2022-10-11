import { types } from 'mobx-state-tree';

const LoginByCredentialsModel = types
	.model('LoginByCredentialsModel', {
		username: types.string,
		password: types.string,
	})
	.actions((self) => ({
		setUsername(value: string) {
			self.username = value;
		},
		setPassword(value: string) {
			self.password = value;
		},
	}));

export default LoginByCredentialsModel;
