import React, { createContext, FC, useContext } from 'react';
import { IConfigContext } from './interface';
import { ANT_LOCALES, FALLBACK_LOCALE_CODE, LOCALES } from '@config/locale';

const initialState: IConfigContext = {
	fallbackLocaleCode: FALLBACK_LOCALE_CODE,
	locales: LOCALES,
	antLocales: ANT_LOCALES,
};

const ConfigContext = createContext<IConfigContext>(initialState);

const useConfigContext = () => useContext(ConfigContext);

const ConfigProvider: FC = ({ children }) => {
	return (
		<ConfigContext.Provider
			value={{
				fallbackLocaleCode: FALLBACK_LOCALE_CODE,
				locales: LOCALES,
				antLocales: ANT_LOCALES,
			}}
		>
			{children}
		</ConfigContext.Provider>
	);
};

export {
	ConfigProvider,
	useConfigContext
};
