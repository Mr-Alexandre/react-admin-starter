import { ICanActivate, TCanActivateReturn } from '@route-guard/route-guard.interface';
import { ExtractRouteParams, RouteComponentProps } from 'react-router';
import { of, timeout } from 'rxjs';


export async function asyncDelay(ms: number) {
	return await new Promise(resolve => setTimeout(resolve, ms));
}

export function authGuard() {
	const canActivate = (props: RouteComponentProps<ExtractRouteParams<string, string>>) => {
		// await asyncDelay(500);
		if (localStorage.getItem('auth')) {
			return true;
		}
		return '/';
	}

	return <ICanActivate> {
		canActivate: canActivate
	}
}
