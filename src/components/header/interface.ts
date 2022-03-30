import * as React from 'react';

export interface IHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
	isCollapsed: boolean;
	toggleCollapse: () => void;
}
