import { IAntLocale, ILocale } from '@interfaces/locale';

export interface IConfigContext {
	fallbackLocaleCode: string;
	locales: ILocale[];
	antLocales: IAntLocale[];
}
