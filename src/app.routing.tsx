import React, { FC } from 'react';
import LoaderComponent from '@components/loader/loader.component';
import ErrorComponent from '@components/error/error.component';
import BaseLayout from './layouts/base/base.layout';
import { useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/auth/auth.layout';
import NotFoundPage from '@pages/not-found/not-found.page';
import LazyLoad from '@components/lazy-load/lazy-load.component';
import Redirect from '@components/redirect/redirect.component';
import { Route } from '@interfaces/route';

export const routes: Route[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				index: true,
				breadcrumb: 'Home',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/home/home.page')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: 'secondary',
				breadcrumb: 'Secondary',
				children: [
					{
						index: true,
						element: (
							<LazyLoad
								loadComponent={() => import('@pages/secondary/secondary.page')}
								fallback={LoaderComponent}
								error={ErrorComponent}
							/>
						),
					},
					{
						path: ':id',
						element: (
							<LazyLoad
								loadComponent={() => import('@pages/secondary/detail/secondary-detail.page')}
								fallback={LoaderComponent}
								error={ErrorComponent}
							/>
						),
					},
				]
			},
			{
				path: 'post',
				breadcrumb: 'Post',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/post/post.page')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: '*',
				element: <NotFoundPage />,
			}
		]
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: 'sign-in',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/sign-in/sign-in.page')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: 'sign-up',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/sign-up/sign-up.page')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: '*',
				element: <Redirect to="/sign-in" />
			}
		]
	},
	{
		path: '*',
		element: <NotFoundPage />,
	}
];

const AppRouting: FC = () => {
	return useRoutes(routes);
};

export default AppRouting;
