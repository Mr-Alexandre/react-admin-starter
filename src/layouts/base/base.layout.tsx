import React, { FC, useState } from 'react';
import './base.layout.scss';
import { IBaseLayoutProps } from './base.interface';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '@components/header/header.component';
import SideNav from '@components/side-nav/side-nav.component';
import Breadcrumb from '@components/breadcrumb/breadcrumb.component';

const { Sider, Content } = Layout;

const BaseLayout: FC<IBaseLayoutProps> = () => {
	const [isCollapsed, setCollapsed] = useState(false);

	const toggle = (): void => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<Layout className="base-layout">
			<SideNav className="base-layout__side-nav" isCollapsed={isCollapsed} />
			<Layout className="base-layout__main">
				<Header className="base-layout__header" isCollapsed={isCollapsed} toggleCollapse={toggle} />
				<Content className="base-layout__container">
					<Breadcrumb className="base-layout__breadcrumb" />
					<div className="base-layout__content">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};


export default BaseLayout;
