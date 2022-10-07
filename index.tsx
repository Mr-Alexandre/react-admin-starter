import React, { FC, useEffect } from 'react';
import App from 'src';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const AppWithCallbackAfterRender: FC = () => {
	useEffect(() => {
		const criticalLoaderStyle = document.getElementById('critical-loader-style');
		if (criticalLoaderStyle) {
			criticalLoaderStyle.remove();
		}
	});

	return <App />;
};
const container = document.getElementById('app');
if (!container) {
	throw new Error('Initialize: element with id app is not found');
}
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
