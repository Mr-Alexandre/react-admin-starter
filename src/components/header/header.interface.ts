import * as React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
	isCollapsed: boolean;
	toggleCollapse: () => void;
}
