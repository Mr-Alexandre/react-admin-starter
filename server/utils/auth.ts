import { IAuthSession, IAuthSessionData } from '@domain/auth/interfaces/auth';
import { Request, Response } from 'express';
import cookie from 'cookie';
import { decodeJwt, JWTPayload } from 'jose';

export function getAuth(request: Request, response: Response): IAuthSession {
	const cookieString = request.headers?.['cookie'];
	const parsedCookie = cookie.parse(cookieString!);
	const access_token = parsedCookie['access_token'];
	let data: IAuthSessionData | null = null;
	let jwtPayload: JWTPayload = {};

	if (access_token) {
		try {
			jwtPayload = decodeJwt(access_token);
			data = {
				jwtPayload
			};
		} catch (e) {
			console.log('error when trying to parse JWT');
		}
	}

	return {
		authorized: !!data,
		data
	};
}
