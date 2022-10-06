const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
	moduleNameMapper: {
		...pathsToModuleNameMapper(
			compilerOptions.paths, /*, { prefix: '<rootDir>/' } */
		),
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/test/__mocks__/fileMock.js',
		'\\.(sa|sc|c)ss$': '<rootDir>/src/test/__mocks__/styleMock.js',
	},
	transform: {
		"^.+\\.(js|ts)$": "ts-jest",
	},
}
