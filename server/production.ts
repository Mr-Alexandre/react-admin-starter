import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import { getAuth } from './utils/auth';
import { PORT } from './config';
import fs from 'fs';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { getEnvFilePath } from '../env.utils';

dotenv.config({
	path: getEnvFilePath('production')
});

const app = express();

app.use(cors())
app.use('/public', express.static('public'));
app.use(express.static(path.resolve(__dirname, "../dist"), {
	index: false,
}));

useExpressServer(app, {
	classTransformer: true,
	routePrefix: 'api',
	controllers: [path.join(__dirname + '/controllers/*.ts')] // we specify controllers we want to use
	// middlewares: [path.join(__dirname, '/middlewares/**/*.js')],
	// interceptors: [path.join(__dirname, '/interceptors/**/*.js')],
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

app.listen(PORT, function() {
	console.log(
		`dev server started, Available on: http://localhost:${PORT}/`
	);
});
