import React, { FC } from 'react';
import AppRouting from './app.routing';
import { BrowserRouter } from 'react-router-dom';
import './app.component.scss';
import './style/index.scss';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

const App: FC = () => (
	<React.StrictMode>
		<ConfigProvider locale={ruRu}>
			<BrowserRouter>
				<AppRouting />
			</BrowserRouter>
		</ConfigProvider>
	</React.StrictMode>
);

export default App;
