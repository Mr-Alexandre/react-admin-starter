import React, { FC, Suspense } from 'react';
import AppRouting from './routing';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import './style/index.scss';
import './i18n';
import { LocaleProvider, useLocaleContext } from '@context/locale';
import { getAntLocaleByCode } from '@utils/locale';
import { ConfigProvider, useConfigContext } from '@context/config';
import { ConfigProvider as AntConfigProvider } from 'antd';
import Bootstrap from '@components/bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

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
							<Base />
						</QueryClientProvider>
					</LocaleProvider>
				</ConfigProvider>
			</Suspense>
		</React.StrictMode>
	);
};

export default App;
