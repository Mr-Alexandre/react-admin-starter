const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const baseCssModuleOptions = require('./css-loader.options');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

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
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
		splitChunks: {
			chunks: "all"
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
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							...baseCssModuleOptions,
						}
					},
					'postcss-loader',
					{
						loader: "less-loader",
						options: {
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
		new HtmlWebpackPlugin({
			template: path.resolve(paths.public, 'index.html'),
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new CompressionPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		})
	]
});
