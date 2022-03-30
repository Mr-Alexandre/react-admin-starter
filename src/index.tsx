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

const App: FC = () => {
	const { locale } = useLocaleContext();
	const { antLocales } = useConfigContext();

	return (
		<React.StrictMode>
			<Suspense fallback={<p>Loading...</p>}>
				<ConfigProvider>
					<LocaleProvider>
						<AntConfigProvider locale={getAntLocaleByCode(locale.code, antLocales)?.locale}>
							<BrowserRouter>
								<AppRouting />
							</BrowserRouter>
						</AntConfigProvider>
					</LocaleProvider>
				</ConfigProvider>
			</Suspense>
		</React.StrictMode>
	);
};

export default App;
