import React, { FC } from 'react';
import { IBreadcrumbProps } from '@components/breadcrumb/interface';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from '../../routing';
import classNames from 'classnames';
import styles from './index.module.scss';

const Breadcrumb: FC<IBreadcrumbProps> = ({ className }) => {
	const breadcrumbs = useBreadcrumbs(routes);

	return (
		<AntBreadcrumb className={classNames(className, styles.breadcrumb)}>
			{breadcrumbs.map((item) => (
				<AntBreadcrumb.Item key={item.key}>
					{item.breadcrumb}
				</AntBreadcrumb.Item>
			))}
		</AntBreadcrumb>
	);
};

export default Breadcrumb;
