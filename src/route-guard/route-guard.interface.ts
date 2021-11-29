import { ExtractRouteParams, RouteComponentProps } from 'react-router';

export type TRedirectUrl = string;

export type TCanActivateReturn = boolean | TRedirectUrl;

export interface ICanActivate {
	canActivate: (props: RouteComponentProps<ExtractRouteParams<string, string>>) => Promise<TCanActivateReturn> | TCanActivateReturn
}

export interface ICanDeactivate {
	canDeactivate?: (props: RouteComponentProps<ExtractRouteParams<string, string>>) => Promise<boolean> | boolean | TRedirectUrl
}
