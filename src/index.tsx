import React, { FC, Suspense } from 'react';
import './styles/global.scss';
import i18n from 'i18n.config';
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
import { I18nextProvider } from 'react-i18next';
import { AuthProvider } from '@domain/auth/context/auth';
import { IAppProps } from './interface';

const queryClient = new QueryClient(reactQueryConfig);

const Base: FC = () => {
	const { locale } = useLocaleContext();
	const { antLocales } = useConfigContext();

	return (
		<AntConfigProvider
			locale={getAntLocaleByCode(locale.code, antLocales)?.locale}
		>
			<AppRouting />
		</AntConfigProvider>
	);
};

const App: FC<IAppProps> = ({
	pageProps
}) => {
	return (
		<React.StrictMode>
			<Suspense fallback={<Bootstrap />}>
				<BrowserRouter>
					<I18nextProvider i18n={i18n}>
						<ConfigProvider>
							<LocaleProvider>
								<QueryClientProvider client={queryClient}>
									<StoreProvider>
										<AuthProvider initialSession={pageProps?.session}>
											<Base />
										</AuthProvider>
									</StoreProvider>
								</QueryClientProvider>
							</LocaleProvider>
						</ConfigProvider>
					</I18nextProvider>
				</BrowserRouter>
			</Suspense>
		</React.StrictMode>
	);
};

export default App;
