import React, { FC } from 'react';
import Example from '@components/example/example.component';
import BaseLayout from '../../layouts/base/base.layout';

const HomePage: FC = () => {
	return (
		<BaseLayout>
			<Example title="text" />
		</BaseLayout>
	);
}

export default HomePage;
