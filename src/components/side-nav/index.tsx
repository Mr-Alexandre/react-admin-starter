import React, { FC } from 'react';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
	BorderBottomOutlined,
	DatabaseOutlined,
	HomeOutlined,
	OrderedListOutlined,
	PauseOutlined,
	UnorderedListOutlined
} from '@ant-design/icons';
import { ISideNavProps } from '@components/side-nav/interface';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const { Sider } = Layout;

const getSelectedKeys = (pathname: string) => {
	return pathname.split('/')
		.reduce<string[]>((previousValue, currentValue, currentIndex) => {
			if (!currentIndex) {
				return [
					...previousValue,
					currentValue
				];
			}
			return [
				...previousValue,
				previousValue[previousValue.length - 1] + '/' + currentValue
			];
		}, []);
};

const SideNav: FC<ISideNavProps> = ({ isCollapsed, className }) => {
	const { t } = useTranslation();
	const location = useLocation();
	const menuItems: ItemType[] = [
		{
			key: '/',
			label: (
				<Link to="/">
					{t('common:components.sideNav.menu.options.home', 'Home')}
				</Link>
			),
			icon: <HomeOutlined />
		},
		{
			key: '/secondary',
			label: (
				<Link to="/secondary">
					{t('common:components.sideNav.menu.options.secondary', 'Secondary')}
				</Link>
			),
			icon: <PauseOutlined />
		},
		{
			key: '/post',
			label: (
				<Link to="/post">
					{t('common:components.sideNav.menu.options.post', 'Post')}
				</Link>
			),
			icon: <UnorderedListOutlined />
		},
		{
			key: '/example',
			label: (
				<Link to="/example">
					{t('common:components.sideNav.menu.options.example', 'Example')}
				</Link>
			),
			icon: <BorderBottomOutlined />
		},
		{
			key: '/example-form',
			label: t('common:components.sideNav.menu.options.exampleForm.title', 'Example form'),
			icon: <DatabaseOutlined />,
			children: [
				{
					key: '/example-form/back',
					label: (
						<Link to="/example-form/back">
							{t('common:components.sideNav.menu.options.exampleForm.options.back', 'Back')}
						</Link>
					)
				},
				{
					key: '/example-form/front',
					label: (
						<Link to="/example-form/front">
							{t('common:components.sideNav.menu.options.exampleForm.options.front', 'Front')}
						</Link>
					)
				}
			]
		},
		{
			key: '/example-todo',
			label: (
				<Link to="/example-todo">
					{t('common:components.sideNav.menu.options.exampleTodo', 'Example todo')}
				</Link>
			),
			icon: <OrderedListOutlined />
		},
	];
	const selectedKeys = getSelectedKeys(location.pathname);

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
				selectedKeys={selectedKeys}
				defaultOpenKeys={selectedKeys}
				items={menuItems}
			/>
		</Sider>
	);
};

export default SideNav;
