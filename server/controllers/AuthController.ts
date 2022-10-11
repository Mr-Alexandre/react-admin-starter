import { Controller, Get, Post, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import cookie from 'cookie';
import { getAuth } from '../utils/auth';

@Controller('/auth')
export default class AuthController {
	@Post('/logout')
	logout(
		@Req() request: Request,
		@Res() response: Response
	) {
		return response.setHeader('Set-Cookie', [
			cookie.serialize('access_token', '', {
				httpOnly: true,
				secure: process.env.NODE_ENV !== 'development',
				maxAge: -1,
				path: '/'
			}),
			cookie.serialize('refresh_token', '', {
				httpOnly: true,
				secure: process.env.NODE_ENV !== 'development',
				maxAge: -1,
				path: '/'
			})
		])
			.status(200)
			.end();
	}

	@Get('/session')
	session(
		@Req() request: Request,
		@Res() response: Response
	) {
		const session = getAuth(request, response);

		return response.status(200)
			.json(session);
	}
}
