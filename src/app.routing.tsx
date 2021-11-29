import React, { FC } from 'react';
import { TRoutes } from '@interfaces/route';
import RouterOutlet from '@components/router-outlet/router-outlet.component';
import lazyLoadFactory from '@components/lazy-load/lazy-load.factory';
import LoaderComponent from '@components/loader/loader.component';
import ErrorComponent from '@components/error/error.component';
import { authGuard } from '@route-guard/guards/auth.guard';

const routes: TRoutes = [
	{
		path: '/',
		exact: true,
		component: lazyLoadFactory({
			loadComponent: () => import('@pages/home/home.page'),
			fallback: LoaderComponent,
			error: ErrorComponent,
		}),
	},
	{
		path: '/secondary',
		canActivate: [
			authGuard()
		],
		component: lazyLoadFactory({
			loadComponent: () => import('@pages/secondary/secondary.routing'),
			fallback: LoaderComponent,
			error: ErrorComponent,
		}),
	},
	{
		path: '/post',
		component: lazyLoadFactory({
			loadComponent: () => import('@pages/post/post.routing'),
			fallback: LoaderComponent,
			error: ErrorComponent,
		}),
	},
];

const AppRouting: FC = () => {
	return (
		<RouterOutlet routes={routes} />
	);
}

export default AppRouting;
