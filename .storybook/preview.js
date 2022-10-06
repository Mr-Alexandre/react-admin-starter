import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from '../src/context/store';
import { ConfigProvider } from '../src/context/config';
import { LocaleProvider } from '../src/context/locale';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});
const storeState = undefined;

const withAllProvider = (Story, context) => {
	return (
		<I18nextProvider i18n={i18n}>
			<ConfigProvider>
				<LocaleProvider>
					<QueryClientProvider client={queryClient}>
						<StoreProvider initialState={storeState}>
							<BrowserRouter>
								<Story {...context} />
							</BrowserRouter>
						</StoreProvider>
					</QueryClientProvider>
				</LocaleProvider>
			</ConfigProvider>
		</I18nextProvider>
	);
};

export const decorators = [withAllProvider];
