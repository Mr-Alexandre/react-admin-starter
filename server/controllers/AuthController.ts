import { Controller, Get, Post, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import { getAuth } from '../utils/auth';

@Controller('/auth')
export default class AuthController {
	@Post('/logout')
	logout(
		@Req() request: Request,
		@Res() response: Response
	) {
		return response
			.clearCookie('access_token')
			.clearCookie('refresh_token')
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
