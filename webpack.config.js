const {merge} = require('webpack-merge');
const commonConfig = require('./webpack-config/webpack.common');
const developmentConfig = require('./webpack-config/webpack.dev');
const productionConfig = require('./webpack-config/webpack.prod');

module.exports = (env, argv) => {
	switch (env.NODE_ENV) {
		case 'production':
			return merge(commonConfig(env, argv), productionConfig(env, argv));
		case 'development':
			return merge(commonConfig(env, argv), developmentConfig(env, argv));
		default:
			throw new Error('No matching configuration was found!');
	}
};
