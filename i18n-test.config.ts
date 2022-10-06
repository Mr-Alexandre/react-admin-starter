import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LOCALE_CODE } from './locale.config';
import fs from 'fs';
import path from 'path';

function getResources(): Record<string, any> {
	const pathToLocalesFolder = path.resolve(__dirname, 'public/locales');
	const localesFolderContents = fs.readdirSync(pathToLocalesFolder);
	const resources: Record<string, any> = {};

	localesFolderContents.forEach(item => {
		const pathToLocaleFolder = path.join(pathToLocalesFolder, item);

		if (fs.lstatSync(pathToLocaleFolder).isDirectory()) {
			const resource = resources[item] = {};
			const contents = fs.readdirSync(pathToLocaleFolder);

			contents.forEach(translation => {
				const pathToTranslationFile = path.join(pathToLocaleFolder, translation);
				const file = path.parse(pathToTranslationFile);
				if (
					fs.lstatSync(pathToTranslationFile).isFile() &&
					file.ext === '.json'
				) {
					// @ts-ignore
					resource[file.name] = require(pathToTranslationFile);
				}
			})
		}
	});
	return resources;
}

i18n.use(initReactI18next)
	.init({
		lng: DEFAULT_LOCALE_CODE,
		fallbackLng: DEFAULT_LOCALE_CODE,
		debug: false,
		defaultNS: 'common',
		ns: ['common'],
		interpolation: {
			escapeValue: false // not needed for react!!
		},
		resources: getResources(),
	});

export default i18n;
