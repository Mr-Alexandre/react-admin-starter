import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from '@context/store';
import reactQueryConfig from '../../../react-query.config';
import { IStoreState } from '@context/store/interface';
import i18n from '../../../i18n-test.config';
import { I18nextProvider } from 'react-i18next';
import { ConfigProvider } from '@context/config';
import { LocaleProvider } from '@context/locale';

const queryClient = new QueryClient(reactQueryConfig);
const storeState: IStoreState | undefined = undefined;

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<I18nextProvider i18n={i18n}>
			<ConfigProvider>
				<LocaleProvider>
					<QueryClientProvider client={queryClient}>
						<StoreProvider initialState={storeState}>
							{children}
						</StoreProvider>
					</QueryClientProvider>
				</LocaleProvider>
			</ConfigProvider>
		</I18nextProvider>
	);
};

const renderWithProviders = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

export { renderWithProviders, AllTheProviders };
