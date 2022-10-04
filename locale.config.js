// @ts-check
const ruRu = require('antd/lib/locale/ru_RU');
const enUs = require('antd/lib/locale/en_US');
const kkKZ = require('antd/lib/locale/kk_KZ');

/** @type {import("./locale-config")} */
const LOCALES = [
	{
		code: 'en',
		name: 'English',
	},
	{
		code: 'ru',
		name: 'Russian',
	},
];

const DEFAULT_LOCALE_CODE = 'en';

const DEFAULT_LOCALE_NAMESPACE = 'common';

const ANT_LOCALES = [
	{
		code: 'ru',
		locale: ruRu,
	},
	{
		code: 'en',
		locale: enUs,
	},
	{
		code: 'kz',
		locale: kkKZ,
	},
];


module.exports = {
	LOCALES,
	DEFAULT_LOCALE_CODE,
	DEFAULT_LOCALE_NAMESPACE,
	ANT_LOCALES
};
