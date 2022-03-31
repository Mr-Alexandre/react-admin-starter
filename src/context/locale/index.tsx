import React, { createContext, FC, useContext, useState } from 'react';
import { ILocale } from '@interfaces/locale';
import { ILocaleContext } from './interface';
import { useTranslation } from 'react-i18next';
import { getLocaleByCode } from '@utils/locale';
import { FALLBACK_LOCALE_CODE, LOCALES } from '@config/locale';
import { useConfigContext } from '../config';

const initialState: ILocaleContext = {
	locale: getLocaleByCode(FALLBACK_LOCALE_CODE, LOCALES)!,
	setLocale: () => {
	},
	isLoading: false,
};

const LocaleContext = createContext<ILocaleContext>(initialState);

const useLocaleContext = () => useContext(LocaleContext);

const LocaleProvider: FC = ({ children }) => {
	const { i18n } = useTranslation();
	const { locales } = useConfigContext();
	const [locale, setLocale] = useState(() => {
		return getLocaleByCode(i18n.language, locales)!;
	});
	const [isLoading, setIsLoading] = useState(false);

	const changeLocale = async (locale: ILocale) => {
		setIsLoading(true);
		await i18n.changeLanguage(locale.code);
		setLocale(locale);
		setIsLoading(false);
	};

	return (
		<LocaleContext.Provider
			value={{
				locale,
				setLocale: changeLocale,
				isLoading,
			}}
		>
			{children}
		</LocaleContext.Provider>
	);
};

export {
	LocaleProvider,
	useLocaleContext
};
