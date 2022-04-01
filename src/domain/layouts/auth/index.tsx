import React, { FC } from 'react';
import { IAuthLayoutProps } from './interface';
import { Outlet } from 'react-router-dom';
import './style.scss';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header, Content, Footer } = Layout;

const AuthLayout: FC<IAuthLayoutProps> = () => {
	const { t } = useTranslation();

	return (
		<Layout className="auth-layout">
			<Header className="auth-layout__header">
				<div className="auth-layout__logo" />
			</Header>
			<Content className="auth-layout__content">
				<Outlet />
			</Content>
			<Footer className="auth-layout__footer">
				{t(
					'global.copyright',
					'L.A.V. react starter ©2022 Created by L.A.V.'
				)}
			</Footer>
		</Layout>
	);
};

export default AuthLayout;
