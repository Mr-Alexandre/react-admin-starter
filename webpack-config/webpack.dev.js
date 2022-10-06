const ip = require('ip');
const paths = require('./paths');
const baseCssModuleOptions = require('./css-loader.options');

module.exports = () => ({
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
		host: ip.address(),
		port: 8080,
		client: {
			overlay: {
				errors: true,
				warnings: false
			}
		},
		static: [
			{
				directory: paths.root,
			},
		],
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							...baseCssModuleOptions,
							sourceMap: true,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: []
});
