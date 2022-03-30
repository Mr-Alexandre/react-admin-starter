import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { FALLBACK_LOCALE_CODE, LOCALES } from '@config/locale';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: FALLBACK_LOCALE_CODE,
		debug: process.env.NODE_ENV === 'development',
		supportedLngs: LOCALES.map(locale => locale.code),
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: '/public/locales/{{lng}}/{{ns}}.json',
		}
	});

export default i18n;
