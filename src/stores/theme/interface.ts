import { Instance, SnapshotOut } from 'mobx-state-tree';
import ThemeStore from '@stores/theme/theme.store';

export interface IThemeStore extends Instance<typeof ThemeStore> {}

export interface IThemeStoreData extends SnapshotOut<typeof ThemeStore> {}

export enum EThemes {
	LIGHT = 'light',
	DARK = 'dark',
}

/*
t('theme.options.light', 'light')
t('theme.options.dark', 'dark')
*/
