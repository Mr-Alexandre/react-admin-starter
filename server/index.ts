// this shim is required
import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as ip from 'ip';
import multer from 'multer';
import 'reflect-metadata';
import { Action, useExpressServer } from 'routing-controllers';
import TestController from './TestController';

const PORT = 8181;
const HOSTNAME = ip.address();
export const DELAY = 1500; //milliseconds

let app = express(); // your created express server
const upload = multer();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
// app.options('*', cors());

app.use(upload.array(''));

// creates express app, registers all controller routes and returns you express app instance
useExpressServer(app, {
	authorizationChecker: async (action: Action, roles: string[]) => {
		// const token = action.request.headers.authorization;
		return true;
	},
	classTransformer: true,
	controllers: [TestController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(PORT, () => {
	console.log(
		`API server started, Available on: http://${HOSTNAME}:${PORT}/`
	);
});
