import './side-nav.component.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SideNavProps } from '@components/side-nav/side-nav.interface';
import { concatClassName } from '@utils/class-name';

const { Sider } = Layout;

const SideNav: FC<SideNavProps> = ({
	isCollapsed,
	className
}) => {
	const items = [
		{
			href: '/',
			title: 'Home',
		},
		{
			href: '/secondary',
			title: 'Secondary',
		},
		{
			href: '/post',
			title: 'Post',
		}
	];

	return (
		<Sider className={concatClassName(className, 'side-nav')} trigger={null} collapsible collapsed={isCollapsed}>
			<div className="side-nav__logo" />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
