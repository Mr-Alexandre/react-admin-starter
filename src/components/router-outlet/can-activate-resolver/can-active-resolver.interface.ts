import { ICanActivate } from '@route-guard/route-guard.interface';
import { ExtractRouteParams, RouteComponentProps } from 'react-router';
import React from 'react';

export interface ICanActivateResolverProps {
	routerProps: RouteComponentProps<ExtractRouteParams<string, string>>
	fallback: React.ComponentType<any>
	redirectUrl: string
	data: ICanActivate[]
}
