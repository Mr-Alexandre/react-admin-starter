import React, { FC } from 'react';
import { IBreadcrumbProps } from '@components/breadcrumb/interface';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from '../../routing';
import classNames from 'classnames';

const Breadcrumb: FC<IBreadcrumbProps> = ({ className }) => {
	const breadcrumbs = useBreadcrumbs(routes);
	breadcrumbs.splice(0, breadcrumbs.length > 1 ? 1 : 0);

	return (
		<AntBreadcrumb className={classNames(className, 'breadcrumb')}>
			{breadcrumbs.map((item) => (
				<AntBreadcrumb.Item key={item.key}>
					{item.breadcrumb}
				</AntBreadcrumb.Item>
			))}
		</AntBreadcrumb>
	);
};

export default Breadcrumb;
