import { types } from 'mobx-state-tree';

const ExampleStore = types
	.model('ExampleStore', {
		value: types.string,
		isMenuOpened: types.boolean,
	})
	.actions((self) => ({
		setValue(value: string) {
			self.value = value;
		},
		setMenuOpened(status: boolean) {
			self.isMenuOpened = status;
		},
	}));

export default ExampleStore;
