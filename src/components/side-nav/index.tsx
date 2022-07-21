import './style.scss';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ISideNavProps } from '@components/side-nav/interface';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const { Sider } = Layout;

const SideNav: FC<ISideNavProps> = ({ isCollapsed, className }) => {
	const { t } = useTranslation();
	const location = useLocation();

	const items = [
		{
			href: '/',
			exact: true,
			title: t('nav.items.home', 'Home'),
		},
		{
			href: '/secondary',
			title: t('nav.items.secondary', 'Secondary'),
		},
		{
			href: '/post',
			title: t('nav.items.post', 'Post'),
		},
		{
			href: '/example',
			title: t('nav.items.example', 'Example'),
		},
	];

	const getSelectedKeys = () => {
		const match = items.find((item) => {
			if (item.exact) {
				return new RegExp(location.pathname).exec(item.href);
			}
			return new RegExp(item.href).exec(location.pathname);
		});
		return match ? [match.href] : [];
	};

	return (
		<Sider
			className={classNames(className, 'side-nav')}
			trigger={null}
			collapsible
			collapsed={isCollapsed}
		>
			<div className="side-nav__logo" />
			<Menu theme="dark" mode="inline" selectedKeys={getSelectedKeys()}>
				{items.map((item) => (
					<Menu.Item key={item.href} icon={<UserOutlined />}>
						<Link to={item.href}>{item.title}</Link>
					</Menu.Item>
				))}
			</Menu>
		</Sider>
	);
};

export default SideNav;
