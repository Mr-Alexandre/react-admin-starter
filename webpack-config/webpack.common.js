const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
	const additionalPlugins = [];
	if (env.NODE_ENV === 'production') {
		additionalPlugins.push(
			new HtmlWebpackPlugin({
				template: path.resolve(paths.public, 'index.html'),
				filename: 'index.html',
			}),
		)
	}

	return {
		entry: ['index.tsx'],
		output: {
			path: paths.build,
			filename: '[name].bundle.js',
			chunkFilename: '[name].bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource'
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|)$/,
					type: 'asset/inline'
				},
				{
					test: /\.svg$/,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack']
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
		].concat(...additionalPlugins),
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			plugins: [new TsconfigPathsPlugin({})]
		}
	};
};
