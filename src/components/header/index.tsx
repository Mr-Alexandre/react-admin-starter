import React, { FC } from 'react';
import './style.scss';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { IHeaderProps } from '@components/header/interface';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '@components/language-toggle';
import classNames from 'classnames';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const UserMenu: FC = () => {
	const { t } = useTranslation();

	const menuItems = [
		{
			label: t('header.userMenu.items.personalArea', 'Personal Area'),
			key: 'personal-area'
		},
		{
			label: t('header.userMenu.items.logout', 'Logout'),
			key: 'logout'
		}
	];

	return (
		<Menu items={menuItems} />
	);
};

const Header: FC<IHeaderProps> = ({
	isCollapsed,
	toggleCollapse,
	className
}) => {
	return (
		<AntHeader className={classNames(className, 'header')}>
			{React.createElement(
				isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
				{
					className: 'header__toggle-collapse',
					onClick: toggleCollapse
				}
			)}

			<div className='header__right-section'>
				<LanguageToggle className='header__language' />

				<Dropdown overlay={<UserMenu />} trigger={['click']}>
					<div className='header__user'>
						<p className='header__user-name'>L.A.V.</p>
						<Avatar
							className='header__user-avatar'
							icon={<UserOutlined />}
						/>
					</div>
				</Dropdown>
			</div>
		</AntHeader>
	);
};

export default Header;
