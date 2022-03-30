const paths = require('./paths');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const fileConf = require('./config');
const path = require('path');

module.exports = (env) => {
	const config = fileConf.getConfigs(env);

	return {
		entry: ['index.tsx'],
		output: {
			path: paths.build,
			filename: '[name].bundle.js',
			chunkFilename: '[name].bundle.js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource'
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
					type: 'asset/inline'
				},
				...config.fileReplacements,
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'React starter',
				template: path.resolve(paths.public, 'index.html'),
				filename: 'index.html',
			}),
		],
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			plugins: [new TsconfigPathsPlugin({})]
		}
	};
};
