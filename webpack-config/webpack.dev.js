const ip = require('ip');
const paths = require('./paths');

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
							sourceMap: true,
							importLoaders: 1,
							modules: {
								auto: true,
								mode: (resourcePath) => {
									if (/pure.(sa|sc|c)ss$/i.test(resourcePath)) {
										return "pure";
									}

									if (/global.(sa|sc|c)ss$/i.test(resourcePath)) {
										return "global";
									}

									return "local";
								},
								exportGlobals: true,
								localIdentName: "[name]__[local]--[hash:base64:5]",
								exportLocalsConvention: 'dashes',
							},
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
