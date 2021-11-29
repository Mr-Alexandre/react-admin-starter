import React, { FC } from 'react';
import AppRouting from './app.routing';
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';

const App: FC = () => (
	<BrowserRouter>
		<AppRouting />
	</BrowserRouter>
);

export default App;
