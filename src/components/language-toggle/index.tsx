import React, { FC, PropsWithChildren, useCallback } from 'react';
import { ILanguageToggleProps } from '@components/language-toggle/interface';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useLocaleContext } from '@context/locale';
import { getLocaleByCode } from '@utils/locale';
import { useConfigContext } from '@context/config';
import classNames from 'classnames';
import { MenuProps } from 'antd/lib/menu';

const LanguageMenu: FC<PropsWithChildren<MenuProps>> = ({ onClick }) => {
	const { locale } = useLocaleContext();
	const { locales } = useConfigContext();
	const menuItems = locales.filter((item) => item.code !== locale.code)
		.map(item => {
			return {
				label: item.name,
				key: item.code,
			};
		});

	return (
		<Menu onClick={onClick} items={menuItems} />
	);
};

const LanguageToggle: FC<ILanguageToggleProps> = ({ className }) => {
	const { locale, setLocale, isLoading } = useLocaleContext();
	const { locales } = useConfigContext();

	const changeLanguage = async (languageKey: string) => {
		const nextLocale = getLocaleByCode(languageKey, locales);
		if (!nextLocale) {
			return;
		}
		await setLocale(nextLocale);
	};

	const handleLanguageMenu = useCallback(
		(event: MenuInfo) => changeLanguage(event.key),
		[]
	);

	return (
		<Dropdown
			className={classNames(className)}
			overlay={<LanguageMenu onClick={handleLanguageMenu} />}
			trigger={['click']}
			disabled={isLoading}
		>
			<Button type="link" loading={isLoading}>
				{locale.name} <DownOutlined />
			</Button>
		</Dropdown>
	);
};

export default LanguageToggle;
