const baseCssModuleOptions = require('./css-loader.options');
const webpack = require('webpack');

module.exports = () => ({
	mode: 'development',
	devtool: 'inline-source-map',
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client'],
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
			},
			{
				test: /\.less$/,
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
						loader: "less-loader",
						options: {
							sourceMap: true,
							lessOptions: {
								javascriptEnabled: true
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
