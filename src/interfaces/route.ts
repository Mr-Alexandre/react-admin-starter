import { RouteObject } from 'react-router-dom';

export interface IRoute extends RouteObject {
	breadcrumb?: string;
	children?: IRoute[];
}
