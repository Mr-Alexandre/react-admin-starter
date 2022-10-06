import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import { DEFAULT_LOCALE_CODE } from '../locale.config';

i18n.use(HttpApi)
	.use(initReactI18next)
	.init({
		fallbackLng: DEFAULT_LOCALE_CODE,
		debug: true,
		defaultNS: 'common',
		ns: ['common'],
	});

export default i18n;
