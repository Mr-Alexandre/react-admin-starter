import { Body, Controller, Post, Req, Res } from 'routing-controllers';
import cookie from 'cookie';
import { IAuthLoginByCredentialsData, TAuthLoginByCredentialsResponse } from '@domain/auth/interfaces/auth';
import { Request, Response } from 'express';
import { IValidationError } from '@interfaces/validation-error';

@Controller()
export default class AuthController {
	@Post('/authenticate')
	async loginByToken(
		@Req() request: Request,
		@Res() response: Response,
		@Body() data: IAuthLoginByCredentialsData
	): Promise<
		| TAuthLoginByCredentialsResponse
		| IValidationError<IAuthLoginByCredentialsData>
	> {
		const { username, password } = data;
		if (!username || !password) {
			return response.status(400).json({
				title: 'Validation error',
				titleKey: 'validation.error',
				errors: [
					{
						title: 'Erorr',
						titleKey: 'error',
						detail: 'Field must not be empty',
						detailKey: 'field.empty',
						fields: [
							!username ? 'username' : null,
							!password ? 'password' : null,
						].filter(Boolean),
					},
				],
			});
		}
		if (username != 'admin' || password != 'admin') {
			return response.status(400).json({
				title: 'Validation error',
				titleKey: 'validation.error',
				errors: [
					{
						title: 'Erorr',
						titleKey: 'error',
						detail: 'username or password is not correct',
						detailKey: 'credentials.invalid',
						fields: ['username', 'password'].filter(Boolean),
					},
				],
			});
		}

		const accessToken =
			'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrYVhiNTNwY0FoYkNjSlkxT2ktN0Z6QVUyN2ptbmNuUEhhRjN5RExQaWdrIn0.eyJleHAiOjE2NjI2MzI5OTEsImlhdCI6MTY2MjYzMjM5MSwianRpIjoiNDQyMDI1M2QtNTIwNi00NzViLWIxYTAtZThhOTA1NThmZjU4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkxL2F1dGgvcmVhbG1zL3NlcnZpY2UtdGVtcGxhdGUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNDk4NTFlNmQtOTNlYi00NWUwLWJmY2YtY2JmMzBhMWMxY2E5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2VydmljZS10ZW1wbGF0ZSIsInNlc3Npb25fc3RhdGUiOiJlMDFmNTIzYS02MjJlLTQyYzktOTczMi01ZTVlY2M0ZWRmOTQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsic2VydmljZS10ZW1wbGF0ZS11c2VyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZm9vIn0.VRjuFAI_EsIUq8xgw0_HeVG8eR2bgodvsAZpEn9Y0BCbzZZL6WQ7OUwwgwHCtcGYrClUzkEpRg-VWYziJ7CXjoxlf_E8Gw_lQlMCYA4UVwfzBYJV8CgG-MvYrfFbyCpDBlrRAB6EgFfxSHDgSsAPnJ9WO3XpfYcZjhHyZUULs9QiwKzJmfCukamIZlYyC215NWatlmDZLOTnGs96JQNJ02KyRM4_e8Eo4lxNmF_S8Qccn1GY-CZKI-FjOwagqO07M3DHE3Ek5kpP0ngJPFHpKNDoObVAVzSlaNrUbt4B21loT3y0AhKYowOtSKwrY_X1QOzxYcy7wX0ocuCzPq9XnQ';
		const refreshToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MjY3NWFkNi1jMGJlLTRhZGUtOWUzYy05NzYxMjI3Y2RjM2IifQ.eyJleHAiOjE2NjI2MzQxOTEsImlhdCI6MTY2MjYzMjM5MSwianRpIjoiMTUxNDJjYWMtYTk1OC00MjBhLTkyMjYtNTZjYjcwZWNjYmQyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkxL2F1dGgvcmVhbG1zL3NlcnZpY2UtdGVtcGxhdGUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwOTEvYXV0aC9yZWFsbXMvc2VydmljZS10ZW1wbGF0ZSIsInN1YiI6IjQ5ODUxZTZkLTkzZWItNDVlMC1iZmNmLWNiZjMwYTFjMWNhOSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJzZXJ2aWNlLXRlbXBsYXRlIiwic2Vzc2lvbl9zdGF0ZSI6ImUwMWY1MjNhLTYyMmUtNDJjOS05NzMyLTVlNWVjYzRlZGY5NCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.83liwIvp5QE5-vEa0rJRiyOgCQQy2nBjXiHOCw7qvDo';

		return response
			.setHeader('Set-Cookie', [
				cookie.serialize('access_token', accessToken, {
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					maxAge: Date.now() + 36000,
					domain: 'localhost',
					sameSite: 'none',
				}),
				cookie.serialize('refresh_token', refreshToken, {
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					maxAge: Date.now() + 36000,
					domain: 'localhost',
					sameSite: 'none',
				}),
			])
			.status(200)
			.end();
	}
}
