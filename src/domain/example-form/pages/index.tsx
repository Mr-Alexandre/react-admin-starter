import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ExampleFormPage: FC = () => {
	return (
		<ul>
			<li>
				<Link to={'/example-form/front'}>
					<a>Front validation</a>
				</Link>
			</li>
			<li>
				<Link to={'/example-form/back'}>
					<a>Back validation</a>
				</Link>
			</li>
		</ul>
	);
};

export default ExampleFormPage;
