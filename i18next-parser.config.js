const { LOCALES, DEFAULT_LOCALE_NAMESPACE } = require('./locale.config');

module.exports = {
	createOldCatalogs: false, // save previous translation catalogs to the \_old folder

	defaultNamespace: DEFAULT_LOCALE_NAMESPACE,
	// Default namespace used in your i18next config

	lexers: {
		js: ['JsxLexer'], // if you're writing jsx inside .js files, change this to JsxLexer
		ts: ['JsxLexer'],
		jsx: ['JsxLexer'],
		tsx: ['JsxLexer'],

		default: ['JsxLexer'],
	},

	locales: LOCALES.map((locale) => locale.code),
	// An array of the locales in your applications

	contextSeparator: '_',
	// Key separator used in your translation keys

	keySeparator: '.',
	// Key separator used in your translation keys
	// If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

	namespaceSeparator: ':',
	// Namespace separator used in your translation keys
	// If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

	pluralSeparator: '-',
	// Plural separator used in your translation keys
	// If you want to use plain english keys, separators such as `_` might conflict. You might want to set `pluralSeparator` to a different string that does not occur in your keys.

	output: 'public/locales/$LOCALE/$NAMESPACE.json',
	// Supports $LOCALE and $NAMESPACE injection
	// Supports JSON (.json) and YAML (.yml) file formats
	// Where to write the locale files relative to process.cwd()

	input: [
		'src/**/*.{js,jsx,ts,tsx}',
	],
	// An array of globs that describe where to look for source files
	// relative to the location of the configuration file
	// Globs syntax: https://github.com/isaacs/node-glob#glob-primer
};
