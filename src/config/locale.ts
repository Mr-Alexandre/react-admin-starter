import { IAntLocale, ILocale } from '@interfaces/locale';
import ruRu from 'antd/lib/locale/ru_RU';
import enUs from 'antd/lib/locale/en_US';

export const FALLBACK_LOCALE_CODE: string = 'en';

export const LOCALES: ILocale[] = [
	{
		code: 'ru',
		name: 'Russian',
	},
	{
		code: 'en',
		name: 'English',
	}
];

export const ANT_LOCALES: IAntLocale[] = [
	{
		code: 'ru',
		locale: ruRu
	},
	{
		code: 'en',
		locale: enUs,
	}
];
