import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { IConfigContext } from './interface';
import { ANT_LOCALES, DEFAULT_LOCALE_CODE, LOCALES } from '../../../locale.config';

const initialState: IConfigContext = {
	fallbackLocaleCode: DEFAULT_LOCALE_CODE,
	locales: LOCALES,
	antLocales: ANT_LOCALES,
};

const ConfigContext = createContext<IConfigContext>(initialState);

const useConfigContext = () => useContext(ConfigContext);

const ConfigProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<ConfigContext.Provider
			value={{
				fallbackLocaleCode: DEFAULT_LOCALE_CODE,
				locales: LOCALES,
				antLocales: ANT_LOCALES,
			}}
		>
			{children}
		</ConfigContext.Provider>
	);
};

export { ConfigProvider, useConfigContext };
