import React, { FC } from 'react';
import LoaderComponent from '@components/loader';
import ErrorComponent from '@components/error';
import { useRoutes } from 'react-router-dom';
import AuthLayout from '@domain/layouts/auth';
import NotFoundPage from '@pages/not-found';
import LazyLoad from '@components/lazy-load';
import Redirect from '@components/redirect';
import { IRoute } from '@interfaces/route';
import BaseLayout from '@domain/layouts/base';

export const routes: IRoute[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				index: true,
				breadcrumb: 'Home',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/home')}
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
								loadComponent={() => import('@pages/secondary')}
								fallback={LoaderComponent}
								error={ErrorComponent}
							/>
						),
					},
					{
						path: ':id',
						element: (
							<LazyLoad
								loadComponent={() =>
									import('@pages/secondary/detail')
								}
								fallback={LoaderComponent}
								error={ErrorComponent}
							/>
						),
					},
				],
			},
			{
				path: 'post',
				breadcrumb: 'Post',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/post')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: 'sign-in',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/sign-in')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: 'sign-up',
				element: (
					<LazyLoad
						loadComponent={() => import('@pages/sign-up')}
						fallback={LoaderComponent}
						error={ErrorComponent}
					/>
				),
			},
			{
				path: '*',
				element: <Redirect to="/sign-in" />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

const AppRouting: FC = () => {
	const localeRoutes: IRoute[] = [
		{
			path: ':lang',
			children: routes,
		},
		{
			path: '',
			children: routes,
		},
	];

	return useRoutes(localeRoutes);
};

export default AppRouting;
