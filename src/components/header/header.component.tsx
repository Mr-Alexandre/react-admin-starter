import React, { FC } from 'react';
import './header.component.scss';
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu } from 'antd';
import { HeaderProps } from '@components/header/header.interface';
import { concatClassName } from '@utils/class-name';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;

const UserMenu: FC = () => {
	const { t } = useTranslation();

	return (
		<Menu>
			<Menu.Item key="0">
				{t('Personal Area')}
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="logout">
				{t('Logout')}
			</Menu.Item>
		</Menu>
	);
};

const LanguageMenu: FC = () => {
	return (
		<Menu>
			<Menu.Item key="ru">
				Русский
			</Menu.Item>
			<Menu.Item key="en">
				English
			</Menu.Item>
		</Menu>
	);
};

const Header: FC<HeaderProps> = ({
	isCollapsed,
	toggleCollapse,
	className
}) => {
	const { i18n } = useTranslation();

	return (
		<AntHeader className={concatClassName(className, 'header')}>
			{React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: 'header__toggle-collapse',
				onClick: toggleCollapse,
			})}

			<div className="header__right-section">
				<Dropdown className="header__language" overlay={<LanguageMenu />} trigger={['click']}>
					<Button type="link">{i18n.language} <DownOutlined /></Button>
				</Dropdown>

				<Dropdown overlay={<UserMenu />} trigger={['click']}>
					<div className="header__user">
						<p className="header__user-name">L.A.V.</p>
						<Avatar className="header__user-avatar" icon={<UserOutlined />} />
					</div>
				</Dropdown>
			</div>
		</AntHeader>
	);
};

export default Header;
