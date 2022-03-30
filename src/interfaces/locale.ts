import { Locale } from 'antd/es/locale-provider';

export interface ILocale {
	code: string;
	name: string;
}

export interface IAntLocale {
	code: string;
	locale: Locale;
}
