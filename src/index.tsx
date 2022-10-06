import React, { FC, Suspense } from 'react';
import './styles/global.scss';
import 'i18n.config';
import AppRouting from './routing';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider, useLocaleContext } from '@context/locale';
import { getAntLocaleByCode } from '@utils/locale';
import { ConfigProvider, useConfigContext } from '@context/config';
import { ConfigProvider as AntConfigProvider } from 'antd';
import Bootstrap from '@components/bootstrap';
import { StoreProvider } from '@context/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reactQueryConfig from '../react-query.config';

const queryClient = new QueryClient(reactQueryConfig);

const Base: FC = () => {
	const { locale } = useLocaleContext();
	const { antLocales } = useConfigContext();

	return (
		<AntConfigProvider
			locale={getAntLocaleByCode(locale.code, antLocales)?.locale}
		>
			<BrowserRouter>
				<AppRouting />
			</BrowserRouter>
		</AntConfigProvider>
	);
};

const App: FC = () => {
	return (
		<React.StrictMode>
			<Suspense fallback={<Bootstrap />}>
				<ConfigProvider>
					<LocaleProvider>
						<QueryClientProvider client={queryClient}>
							<StoreProvider>
								<Base />
							</StoreProvider>
						</QueryClientProvider>
					</LocaleProvider>
				</ConfigProvider>
			</Suspense>
		</React.StrictMode>
	);
};

export default App;
