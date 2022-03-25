import React, { FC } from 'react';
import { IAuthLayoutProps } from './auth.interface';
import { Outlet } from 'react-router-dom';
import './auth.layout.scss';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const AuthLayout: FC<IAuthLayoutProps> = () => {
	return (
		<Layout className="auth-layout">
			<Header className="auth-layout__header">
				<div className="auth-layout__logo" />
			</Header>
			<Content className="auth-layout__content">
				<Outlet />
			</Content>
			<Footer className="auth-layout__footer">
				LAV react starter ©2022 Created by L.A.V
			</Footer>
		</Layout>
	);
};

export default AuthLayout;
