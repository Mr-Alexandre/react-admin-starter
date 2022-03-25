import React, { FC } from 'react';
import { concatClassName } from '@utils/class-name';
import { BreadcrumbProps } from '@components/breadcrumb/breadcrumb.interface';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from '../../app.routing';

const Breadcrumb: FC<BreadcrumbProps> = ({
	className
}) => {
	const breadcrumbs = useBreadcrumbs(routes);
	breadcrumbs.splice(0, breadcrumbs.length > 1 ? 1 : 0);

	return (
		<AntBreadcrumb className={concatClassName(className, 'breadcrumb')}>
			{breadcrumbs.map((item) => (
				<AntBreadcrumb.Item key={item.key}>{item.breadcrumb}</AntBreadcrumb.Item>
			))}
		</AntBreadcrumb>
	);
};

export default Breadcrumb;
