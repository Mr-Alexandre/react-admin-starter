import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
	return (
		<>
			<p>Page not fount</p>
			<Link to="sign-in">Login</Link>
			<Link to="sign-up">Redistr</Link>
		</>
	);
};

export default NotFoundPage;
