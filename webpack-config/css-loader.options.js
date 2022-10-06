module.exports = {
	sourceMap: true,
	importLoaders: 2,
	modules: {
		auto: true,
		mode: (resourcePath) => {
			if (/pure.(sa|sc|c)ss$/i.test(resourcePath)) {
				return 'pure';
			}

			if (/global.(sa|sc|c)ss$/i.test(resourcePath)) {
				return 'global';
			}

			return 'local';
		},
		exportGlobals: true,
		localIdentName: '[name]__[local]--[hash:base64:5]',
		exportLocalsConvention: 'dashes'
	}
}
