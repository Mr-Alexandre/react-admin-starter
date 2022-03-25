import { RouteObject } from 'react-router-dom';

export interface Route extends RouteObject {
	breadcrumb?: string;
	children?: Route[];
}
