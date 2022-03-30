import React, { FC, useCallback } from 'react';
import { ILanguageToggleMenuProps, ILanguageToggleProps } from '@components/language-toggle/interface';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { joinClassName } from '@utils/class-name';
import { useLocaleContext } from '@context/locale';
import { getLocaleByCode } from '@utils/locale';
import { useConfigContext } from '@context/config';

const LanguageMenu: FC<ILanguageToggleMenuProps> = ({ onClick }) => {
	const { locale } = useLocaleContext();
	const { locales } = useConfigContext();

	return (
		<Menu onClick={onClick}>
			{locales.filter(item => item.code !== locale.code).map(locale => (
				<Menu.Item key={locale.code}>
					{locale.name}
				</Menu.Item>
			))}
		</Menu>
	);
};

const LanguageToggle: FC<ILanguageToggleProps> = ({ className }) => {
	const { locale, setLocale, isLoading } = useLocaleContext();
	const { locales } = useConfigContext();

	const handleLanguageMenu = useCallback((event: MenuInfo) => changeLanguage(event.key), []);

	const changeLanguage = (languageKey: string) => {
		setLocale(getLocaleByCode(languageKey, locales)!);
	};

	return (
		<Dropdown
			className={joinClassName(className)}
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
