import React, { FC } from 'react';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ISideNavMenuItem, ISideNavProps } from '@components/side-nav/interface';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const { Sider } = Layout;

const SideNav: FC<ISideNavProps> = ({ isCollapsed, className }) => {
	const { t } = useTranslation();
	const location = useLocation();
	const menuItems: ISideNavMenuItem[] = [
		{
			href: '/',
			exact: true,
			title: t('common:components.sideNav.menu.options.home', 'Home'),
			icon: <UserOutlined />,
		},
		{
			href: '/secondary',
			title: t('common:components.sideNav.menu.options.secondary', 'Secondary'),
			icon: <UserOutlined />,
		},
		{
			href: '/post',
			title: t('common:components.sideNav.menu.options.post', 'Post'),
			icon: <UserOutlined />,
		},
		{
			href: '/example',
			title: t('common:components.sideNav.menu.options.example', 'Example'),
			icon: <UserOutlined />,
		},
	];

	const getSelectedKeys = () => {
		const match = menuItems.find((item) => {
			if (item.exact) {
				return new RegExp(location.pathname).exec(item.href);
			}
			return new RegExp(item.href).exec(location.pathname);
		});
		return match ? [match.href] : [];
	};

	const getMenuItems = (items: ISideNavMenuItem[]) => {
		return items.map(item => {
			return {
				label: <Link to={item.href}>{item.title}</Link>,
				key: item.href,
				icon: item.icon,
			}
		})
	}

	return (
		<Sider
			className={classNames(className, styles.sideNav)}
			trigger={null}
			collapsible
			collapsed={isCollapsed}
		>
			<div className={styles.sideNav__logo} />
			<Menu
				theme="dark"
				mode="inline"
				selectedKeys={getSelectedKeys()}
				items={getMenuItems(menuItems)}
			/>
		</Sider>
	);
};

export default SideNav;
