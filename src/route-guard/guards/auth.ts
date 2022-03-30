import { ICanActivate } from '@route-guard/interface';

export async function asyncDelay(ms: number) {
	return await new Promise(resolve => setTimeout(resolve, ms));
}

export function authGuard(): ICanActivate {
	const canActivate = (props: unknown) => {
		if (localStorage.getItem('auth')) {
			return true;
		}
		return true;
	};

	return {
		canActivate: canActivate
	};
}
