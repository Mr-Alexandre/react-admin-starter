const config = require('../config.json');
const path = require('path');

function getConfigs(env) {
  const configuration = config?.configurations[env.NODE_ENV] || {};

  return {
    fileReplacements: getFileReplacements(configuration),
  }
}

function getFileReplacements(configuration) {
  const fileReplacements = [];

  if (configuration && configuration.fileReplacements) {
    for (const replacement of configuration.fileReplacements) {
      // create Webpack module rule
      const replace = {
        test: path.resolve(replacement.replace),
        loader: 'file-replace-loader',
        options: {
          replacement: path.resolve(replacement.with),
          async: true
        }
      }
      fileReplacements.push(replace);
    }
  }
  return fileReplacements;
}

module.exports = {
  getConfigs: getConfigs
}
