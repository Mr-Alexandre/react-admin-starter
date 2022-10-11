import React, { FC, useEffect } from 'react';
import App from 'src';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { IPageProps } from './src/interface';

const getSrrData = (): Partial<IPageProps> => {
	const ssrDataEl = document.getElementById('__SSR_DATA__');
	if (!ssrDataEl) {
		return {};
	}
	try {
		return JSON.parse(ssrDataEl.textContent as string) as Partial<IPageProps>;
	} catch (e) {
		return {};
	}
};

const AppWithCallbackAfterRender: FC<{ ssrData: Partial<IPageProps> }> = ({
	ssrData
}) => {
	useEffect(() => {
		const criticalLoaderStyle = document.getElementById('critical-loader-style');
		if (criticalLoaderStyle) {
			criticalLoaderStyle.remove();
		}
	});

	return <App pageProps={ssrData} />;
};
const container = document.getElementById('app');
const ssrData = getSrrData();
if (!container) {
	throw new Error('Initialize: element with id app is not found');
}
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender ssrData={ssrData} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
