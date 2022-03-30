import { IAntLocale, ILocale } from '@interfaces/locale';

export const getLocaleByCode = (code: string, locales: ILocale[]): ILocale | undefined => {
	return locales.find(locale => locale.code === code);
};

export const getAntLocaleByCode = (code: string, locales: IAntLocale[]): IAntLocale | undefined => {
	return locales.find(locale => locale.code === code);
};

