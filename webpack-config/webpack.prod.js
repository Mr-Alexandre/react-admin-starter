const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const baseCssModuleOptions = require('./css-loader.options');

module.exports = () => ({
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		publicPath: '/',
		filename: '[name].[contenthash].bundle.js'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin()
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				},
				// Пример с выноской конкретной библиотеки
				antd: {
					test: /node_modules\/(antd\/).*/,
					name: 'antd',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: 'runtime'
		}
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							...baseCssModuleOptions,
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new CompressionPlugin({
			test: /\.js(\?.*)?$/i
		})
	]
});
