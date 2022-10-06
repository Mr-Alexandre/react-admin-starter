import { types } from 'mobx-state-tree';
import { EThemes } from '@stores/theme/interface';

const ThemeStore = types
	.model('ThemeStore', {
		value: types.enumeration('Theme', [EThemes.LIGHT, EThemes.DARK]),
	})
	.actions((self) => ({
		setValue(value: EThemes) {
			self.value = value;
		},
	}));

export default ThemeStore;
