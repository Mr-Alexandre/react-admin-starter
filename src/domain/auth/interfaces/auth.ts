import { JWTPayload } from 'jose';

export interface IAuthSession {
	authorized: boolean;
	data?: IAuthSessionData | null;
}

export interface IAuthSessionData {
	jwtPayload: JWTPayload;
}

export interface IAuthPayload extends JWTPayload {}

export interface IAuthLoginByCredentialsData {
	username: string;
	password: string;
}

export type TAuthLoginByCredentialsResponse = unknown;

export type TAuthGetSessionResponse = IAuthSession;

export type TAuthLogoutResponse = unknown;
