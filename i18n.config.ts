import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LOCALE_CODE, DEFAULT_LOCALE_NAMESPACE, LOCALES } from './locale.config';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: DEFAULT_LOCALE_CODE,
		defaultNS: DEFAULT_LOCALE_NAMESPACE,
		ns: [
			'common',
			'breadcrumb'
		],
		debug: process.env.NODE_ENV === 'development',
		supportedLngs: LOCALES.map((locale) => locale.code),
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: '/public/locales/{{lng}}/{{ns}}.json',
		},
		react: {
			useSuspense: false
		}
	});

export default i18n;
