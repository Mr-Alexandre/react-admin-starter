import { ICanActivate } from '@route-guard/interface';

export async function asyncDelay(ms: number) {
	return await new Promise((resolve) => setTimeout(resolve, ms));
}

export function authGuard(): ICanActivate {
	const canActivate = (props: unknown) => {
		return !!(localStorage.getItem('auth'));
	};

	return {
		canActivate: canActivate,
	};
}
