export type TRedirectUrl = string;

export type TCanActivateReturn = boolean | TRedirectUrl;

export interface ICanActivate {
	canActivate: (props: unknown) => Promise<TCanActivateReturn> | TCanActivateReturn;
}

export interface ICanDeactivate {
	canDeactivate?: (props: unknown) => Promise<boolean> | boolean | TRedirectUrl;
}
