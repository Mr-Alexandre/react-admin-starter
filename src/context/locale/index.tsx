import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { ILocale } from '@interfaces/locale';
import { ILocaleContext } from './interface';
import { useTranslation } from 'react-i18next';
import { getLocaleByCode } from '@utils/locale';
import { DEFAULT_LOCALE_CODE, LOCALES } from '../../../locale.config';
import { useConfigContext } from '../config';

const initialState: ILocaleContext = {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	locale: getLocaleByCode(DEFAULT_LOCALE_CODE, LOCALES)!,
	setLocale: () => Promise.resolve(true),
	isLoading: false,
};

const LocaleContext = createContext<ILocaleContext>(initialState);

const useLocaleContext = () => useContext(LocaleContext);

const LocaleProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { i18n } = useTranslation();
	const { locales } = useConfigContext();
	const [locale, setLocale] = useState(() => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return getLocaleByCode(i18n.language, locales)!;
	});
	const [isLoading, setIsLoading] = useState(false);

	const changeLocale = async (_locale: ILocale): Promise<boolean> => {
		setIsLoading(true);
		try {
			await i18n.changeLanguage(_locale.code);
			setLocale(_locale);
		} catch (e) {
			console.log(e);
			return false;
		}
		setIsLoading(false);
		return true;
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

export { LocaleProvider, useLocaleContext };
