const ip = require('ip');
const paths = require('./paths');

module.exports = (env) => ({
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
		host: ip.address(),
		port: 8080,
		overlay: true,
		// static: [
		// 	{
		// 		directory: paths.root,
		// 	},
		// ],
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
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
					},
				],
			},
		]
	},
	plugins: [],
});
