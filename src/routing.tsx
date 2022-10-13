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
import AuthProtectedRoute from '@domain/auth/components/auth-protected-route';
import AuthRedirectRoute from '@domain/auth/components/auth-redirect-route';

export const routes: IRoute[] = [
	{
		element: (
			<AuthProtectedRoute>
				<BaseLayout />
			</AuthProtectedRoute>
		),
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
				children: [
					{
						index: true,
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
						path: ':id',
						breadcrumb: BreadcrumbItem,
						element: (
							<LazyLoad
								loadComponent={() =>
									import('@domain/example/pages/detail')
								}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
							/>
						),
					},
				],
			},
			{
				path: 'example-form',
				breadcrumb: BreadcrumbItem,
				children: [
					{
						path: 'back',
						breadcrumb: BreadcrumbItem,
						element: (
							<LazyLoad
								loadComponent={() => import('@domain/example-form/pages/back')}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
							/>
						),
					},
					{
						path: 'front',
						breadcrumb: BreadcrumbItem,
						element: (
							<LazyLoad
								loadComponent={() => import('@domain/example-form/pages/front')}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
							/>
						),
					}
				]
			},
			{
				path: 'example-todo',
				breadcrumb: BreadcrumbItem,
				children: [
					{
						index: true,
						breadcrumb: BreadcrumbItem,
						element: (
							<LazyLoad
								loadComponent={() => import('@domain/example-todo/pages')}
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
									import('@domain/example-todo/pages/detail')
								}
								fallback={<LoaderComponent />}
								error={<ErrorComponent />}
							/>
						),
					},
				],
			},
			{
				path: '*',
				breadcrumb: BreadcrumbItem,
				element: <NotFoundPage />,
			},
		],
	},
	{
		element: (
			<AuthRedirectRoute redirectUrl={'/'}>
				<AuthLayout />
			</AuthRedirectRoute>
		),
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
