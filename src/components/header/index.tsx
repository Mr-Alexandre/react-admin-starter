import React, { FC } from 'react';
import styles from './index.module.scss';
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
			label: t('common:components.header.menu.options.personalArea', 'Personal Area'),
			key: 'personal-area'
		},
		{
			label: t('common:components.header.menu.options.logout', 'Logout'),
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
		<AntHeader className={classNames(className, styles.header)}>
			{React.createElement(
				isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
				{
					className: styles.header__toggleCollapse,
					onClick: toggleCollapse
				}
			)}

			<div className={styles.header__rightSection}>
				<LanguageToggle className={styles.header__language} />

				<Dropdown overlay={<UserMenu />} trigger={['click']}>
					<div className={styles.header__user}>
						<p className={styles.header__userName}>L.A.V.</p>
						<Avatar
							className={styles.header__userAvatar}
							icon={<UserOutlined />}
						/>
					</div>
				</Dropdown>
			</div>
		</AntHeader>
	);
};

export default Header;
