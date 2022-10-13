import React, { FC } from 'react';
import { useParams } from 'react-router';
import { usePost } from '@domain/example/hooks/post';

const ExampleDetailPage: FC = () => {
	const { id } = useParams();
	const { data: post, isLoading, isError } = usePost(id!);

	if (isLoading) {
		return (
			<p>Loading post...</p>
		);
	}

	if (isError) {
		return (
			<p>Error</p>
		);
	}

	return (
		<>
			{Object.entries(post).map(([key, value]) => (
				<p key={key}>{key}: {value}</p>
			))}
		</>
	);
};

export default ExampleDetailPage;
