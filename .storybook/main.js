const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const baseCssModuleOptions = require('../webpack-config/css-loader.options');
const path = require('path');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-designs',
		require.resolve('storybook-addon-grid/preset'),
		'storybook-addon-pseudo-states',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5'
	},
	webpackFinal: async (config) => {
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions
			})
		];

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						...baseCssModuleOptions
					}
				},
				'sass-loader'
			],
			include: path.resolve(__dirname, '../')
		});
		return config;
	}
};
