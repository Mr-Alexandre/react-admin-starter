const fs = require('fs');
const path = require('path');
const paths = require('./webpack-config/paths');

function getEnvFilePath(env) {
	const priorities = ['local', `${env}.local`, env];
	const getFilePath = name => path.resolve(paths.root, `./.env.${name}`);
	const name = priorities.find(name => {
		const filePath = getFilePath(name);
		if (fs.existsSync(filePath)) {
			return filePath;
		}
	});
	if (!name) {
		throw new Error('env file not fount');
	}
	return getFilePath(name);
}

module.exports = {
	getEnvFilePath
}
