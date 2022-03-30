import { ILocale } from '@interfaces/locale';

export interface ILocaleContext {
	locale: ILocale;
	setLocale: (locale: ILocale) => void;
	isLoading: boolean;
}
