import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { IBaseLayoutProps } from './interface';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';
import SideNav from '@components/side-nav';
import Breadcrumb from '@components/breadcrumb';

const { Content } = Layout;

const BaseLayout: FC<IBaseLayoutProps> = () => {
	const [isCollapsed, setCollapsed] = useState(false);

	const toggle = (): void => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<Layout className={styles.baseLayout}>
			<SideNav
				className={styles.baseLayout__sideNav}
				isCollapsed={isCollapsed}
			/>
			<Layout className={styles.baseLayout__main}>
				<Header
					className={styles.baseLayout__header}
					isCollapsed={isCollapsed}
					toggleCollapse={toggle}
				/>
				<Content className={styles.baseLayout__container}>
					<Breadcrumb className={styles.baseLayout__breadcrumb} />
					<div className={styles.baseLayout__content}>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
