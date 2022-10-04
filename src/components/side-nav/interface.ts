import * as React from 'react';
import { ReactNode } from 'react';

export interface ISideNavProps extends React.HTMLAttributes<HTMLDivElement> {
	isCollapsed: boolean;
}

export interface ISideNavMenuItem {
	href: string;
	exact?: boolean;
	title: ReactNode;
	icon?: ReactNode;
}
