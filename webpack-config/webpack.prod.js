const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => ({
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
				}
				// Пример с выноской конкретной библиотеки
				// antd: {
				//   test: /node_modules\/(antd\/).*/,
				//   name: "antd",
				//   chunks: "all",
				// },
			}
		},
		runtimeChunk: {
			name: 'runtime'
		}
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false
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
