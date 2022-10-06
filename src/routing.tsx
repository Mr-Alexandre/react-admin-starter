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
import BreadcrumbItem from '@components/breadcrumb-item';

export const routes: IRoute[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				index: true,
				breadcrumb: BreadcrumbItem,
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
				breadcrumb: BreadcrumbItem,
				children: [
					{
						index: true,
						breadcrumb: BreadcrumbItem,
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
						breadcrumb: BreadcrumbItem,
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
				breadcrumb: BreadcrumbItem,
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
				breadcrumb: BreadcrumbItem,
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
				breadcrumb: BreadcrumbItem,
				element: <NotFoundPage />,
			},
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				breadcrumb: BreadcrumbItem,
				element: (
					<LazyLoad
						loadComponent={() => import('@domain/auth/pages/login')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
					/>
				),
			},
			{
				path: 'registration',
				breadcrumb: BreadcrumbItem,
				element: (
					<LazyLoad
						loadComponent={() => import('@domain/auth/pages/registration')}
						fallback={<LoaderComponent />}
						error={<ErrorComponent />}
					/>
				),
			},
			{
				path: '*',
				breadcrumb: BreadcrumbItem,
				element: <Redirect to="/login" />,
			},
		],
	},
	{
		path: '*',
		breadcrumb: BreadcrumbItem,
		element: <NotFoundPage />,
	},
];

const AppRouting: FC = () => {
	return useRoutes(routes);
};

export default AppRouting;
