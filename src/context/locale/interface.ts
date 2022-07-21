import { ILocale } from '@interfaces/locale';

export interface ILocaleContext {
	locale: ILocale;
	setLocale: (locale: ILocale) => Promise<boolean>;
	isLoading: boolean;
}
