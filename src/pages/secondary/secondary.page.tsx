import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SecondaryPage: FC = () => {
	return (
		<>
			<h1>Secondary page</h1>
			<ul>
				<li>
					<Link to="/">Back to Home</Link>
				</li>
				<li>
					<Link to="/secondary/45">Detail</Link>
				</li>
			</ul>
		</>
	);
}

export default SecondaryPage;
