import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ISecondaryDetailProps } from '@pages/secondary/detail/secondary-detail.interface';

const SecondaryDetailPage: FC<ISecondaryDetailProps> = () => {
	const { id } = useParams();

	return (
		<>
			<h1>Detail page with id: {id}</h1>
			<ul>
				<li>
					<Link to="/secondary">Back</Link>
				</li>
			</ul>
		</>
	);
};

export default SecondaryDetailPage;
