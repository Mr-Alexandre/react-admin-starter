import { RouteProps } from 'react-router-dom';
import * as React from 'react';
import { LazyExoticComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ICanActivate } from '@route-guard/route-guard.interface';

export type TRoutes = Array<IRoute>;

interface tt extends RouteProps {
}

export interface IRoute {
	path: string | string[]
	exact?: boolean
	strict?: boolean
	sensitive?: boolean
	component?:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>
		| LazyExoticComponent<React.ComponentType<any>>
	data?: unknown
	redirectTo?: string
	canActivate?: ICanActivate[]
	canActivateFallback?: React.ComponentType<any>
	canDeactivate?: unknown[];
	children?: IRoute[]
}
