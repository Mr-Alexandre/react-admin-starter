import React, { FC } from 'react';
import LoaderComponent from '@components/loader';
import ErrorComponent from '@components/error';
import { useRoutes } from 'react-router-dom';
import AuthLayout from '@layouts/auth';
import NotFoundPage from '@domain/404/pages';
import LazyLoad from '@components/lazy-load';
import Redirect from '@components/redirect';
import { IRoute } from '@interfaces/route';
import BaseLayout from '@layouts/base';

export const routes: IRoute[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				index: true,
				breadcrumb: 'Home',
				element: (
					<LazyLoad
						loadComponent={() => import('@domain/home/pages')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
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
								loadComponent={() => import('@domain/secondary/pages')}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
							/>
						),
					},
					{
						path: ':id',
						element: (
							<LazyLoad
								loadComponent={() =>
									import('@domain/secondary/pages/detail')
								}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
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
						loadComponent={() => import('@domain/post/pages')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
					/>
				),
			},
			{
				path: 'example',
				breadcrumb: 'Example',
				element: (
					<LazyLoad
						loadComponent={() => import('@domain/example/pages')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
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
						loadComponent={() => import('@domain/auth/pages/sign-in')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
					/>
				),
			},
			{
				path: 'sign-up',
				element: (
					<LazyLoad
						loadComponent={() => import('@domain/auth/pages/sign-up')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
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
	return useRoutes(routes);
};

export default AppRouting;
