import 'reflect-metadata';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import { getAuth } from './utils/auth';
import { PORT } from './config';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import * as dotenv from 'dotenv';
import { getEnvFilePath } from '../env.utils';

dotenv.config({
	path: getEnvFilePath('development')
});

const app = express();
const devConfig = config({
	NODE_ENV: 'development'
});
const compiler = webpack(devConfig);
const key = fs.readFileSync(path.join(__dirname, './sert/dev/key.pem'));
const cert = fs.readFileSync(path.join(__dirname, './sert/dev/cert.pem'));
const devWebpackMiddleware = webpackDevMiddleware(compiler, {
	publicPath: devConfig.output.publicPath,
	serverSideRender: true
});
const URL = `https://localhost:${PORT}/`;

app.use(cors());
app.use(devWebpackMiddleware);
app.use(webpackHotMiddleware(compiler));
app.use('/public', express.static('public'));

useExpressServer(app, {
	classTransformer: true,
	routePrefix: '/api',
	controllers: [path.join(__dirname + '/controllers/*.ts')] // we specify controllers we want to use
	// middlewares: [path.join(__dirname, '/middlewares/**/*.js')],
	// interceptors: [path.join(__dirname, '/interceptors/**/*.js')],
});

function isObject(x: unknown): x is object {
	return typeof x === 'object' && x !== null;
}

// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
function normalizeAssets(assets: any): any[] {
	if (isObject(assets)) {
		return Object.values(assets);
	}

	return Array.isArray(assets) ? assets : [assets];
}

// The following middleware would not be invoked until the latest build is finished.
app.use((req, res) => {
	const { devMiddleware } = res.locals.webpack;
	const outputFileSystem = devMiddleware.outputFileSystem;
	const jsonWebpackStats = devMiddleware.stats.toJson();
	const { assetsByChunkName, outputPath } = jsonWebpackStats;
	const SSR_DATA = {
		session: getAuth(req, res)
	};

	// Then use `assetsByChunkName` for server-side rendering
	// For example, if you have only one main chunk:
	res.send(`
		<!doctype html>
		<html>
		  <head lang='en'>
			<title>React admin starter</title>
			<meta charset='UTF-8'>
  			<meta name='viewport' content='width=device-width,initial-scale=1'>
			<style>
				${normalizeAssets(assetsByChunkName.main)
		?.filter((pth: string) => pth.endsWith('.css'))
		?.map((pth: any) => outputFileSystem.readFileSync(pth.join(outputPath, pth)))
		?.join('\n')}
			</style>
			<style id='critical-loader-style'>
				html, body {
				  width: 100%;
				  height: 100%;
				  margin: 0;
				  padding: 0;
				}
				.app {
				  width: 100%;
				  height: 100%;
				}
				.bootstrap {
				  width: 100%;
				  height: 100%;
				  display: flex;
				  flex-direction: column;
				  align-items: center;
				  justify-content: center;
				}
				.bootstrap__logo {
				  width: 100px;
				  margin-bottom: 20px;
				}
			  </style>
		  </head>

		  <body>
			<div id='app' class='app'>
			<div class='bootstrap'>
			  <img src='/public/images/logo.svg' alt='logo' class='bootstrap__logo'>
			  <noscript>
				<p>You need to enable JavaScript to run this app.</p>
			  </noscript>
			</div>
		  </div>

		  <script id='__SSR_DATA__' type='application/json'>${JSON.stringify(SSR_DATA)}</script>

		  ${normalizeAssets(assetsByChunkName.main)
		?.filter((pth: string) => pth.endsWith('.js'))
		?.map((pth) => `<script src='/${pth}'></script>`)
		?.join('\n')}
		  </body>
		</html>
  `);
});

https.createServer({ key: key, cert: cert }, app)
	.listen(PORT, () => {
		console.log('> Starting dev server');
		devWebpackMiddleware.waitUntilValid(() => {
			console.log('> Listening at ' + URL + '\n');
		});
	});
