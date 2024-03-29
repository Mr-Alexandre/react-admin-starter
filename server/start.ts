import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import { getAuth } from './utils/auth';
import { PORT } from './config';
import fs from 'fs';
import cors from 'cors';
import https from 'https';
import * as dotenv from 'dotenv';
import { getEnvFilePath } from '../env.utils';

dotenv.config({
	path: getEnvFilePath('production')
});

const key = fs.readFileSync(path.join(__dirname, './sert/dev/key.pem'));
const cert = fs.readFileSync(path.join(__dirname, './sert/dev/cert.pem'));
const app = express();

app.use(cors())
app.use('/public', express.static('public'));
app.use(express.static(path.resolve(__dirname, "../dist"), {
	index: false
}));

useExpressServer(app, {
	classTransformer: true,
	routePrefix: 'api',
	controllers: [path.join(__dirname + '/controllers/*.*')] // we specify controllers we want to use
	// middlewares: [path.join(__dirname, '/middlewares/**/*.*')],
	// interceptors: [path.join(__dirname, '/interceptors/**/*.*')],
});

app.use((req, res) => {
	const SSR_DATA = {
		session: getAuth(req, res)
	};
	const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), {
		encoding: 'utf-8'
	});

	res.send(
		indexHtml.replace(
			`<script id="__SSR_DATA__" type="application/json"></script>`,
			`<script id="__SSR_DATA__" type="application/json">${JSON.stringify(SSR_DATA)}</script>`
		)
	);
});

const server = https.createServer({key: key, cert: cert }, app);
server.listen(PORT, () => {
	console.log(
		`Dev server started, Available on: https://localhost:${PORT}/`
	);
});

