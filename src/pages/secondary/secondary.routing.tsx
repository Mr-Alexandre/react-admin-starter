import React, { FC } from 'react';
import SecondaryPage from '@pages/secondary/secondary.page';
import { TRoutes } from '@interfaces/route';
import SecondaryDetailPage from '@pages/secondary/detail/secondary-detail.page';
import RouterOutlet from '@components/router-outlet/router-outlet.component';
import BaseLayout from '../../layouts/base/base.layout';

const routes: TRoutes = [
	{
		path: '/secondary',
		component: SecondaryPage,
		exact: true,
	},
	{
		path: '/secondary/:id',
		component: SecondaryDetailPage,
	}
];

const SecondaryRouting: FC = () => {
	return (
		<BaseLayout>
			<RouterOutlet routes={routes} />
		</BaseLayout>
	);
}

export default SecondaryRouting;
