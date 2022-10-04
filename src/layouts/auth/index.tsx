import React, { FC } from 'react';
import { IAuthLayoutProps } from './interface';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header, Content, Footer } = Layout;

const AuthLayout: FC<IAuthLayoutProps> = () => {
	const { t } = useTranslation();

	return (
		<Layout className={styles.authLayout}>
			<Header className={styles.authLayout__header}>
				<div className={styles.authLayout__logo} />
			</Header>
			<Content className={styles.authLayout__content}>
				<Outlet />
			</Content>
			<Footer className={styles.authLayout__footer}>
				{t(
					'global.copyright',
					'L.A.V. react starter ©2022 Created by L.A.V.'
				)}
			</Footer>
		</Layout>
	);
};

export default AuthLayout;
