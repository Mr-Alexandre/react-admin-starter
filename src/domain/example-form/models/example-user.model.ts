import { types } from 'mobx-state-tree';

const ExampleUserModel = types
	.model('UserModel', {
		firstName: types.string,
		lastName: types.string,
		surname: types.optional(types.string, ''),
		detail: types.model('UserDetailModel', {
			field1: types.string,
			fields: types.array(
				types.model('UserDetailFieldModel', {
					name: types.string,
				})
			),
		}),
	})

export default ExampleUserModel;
