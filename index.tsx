import React, { FC, useEffect } from 'react';
import App from 'src';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!);

const AppWithCallbackAfterRender: FC = () => {
	useEffect(() => {
		const criticalLoaderStyle = document.getElementById('critical-loader-style');
		if (criticalLoaderStyle) {
			criticalLoaderStyle.remove();
		}
	});

	return <App />;
};

root.render(<AppWithCallbackAfterRender />);
