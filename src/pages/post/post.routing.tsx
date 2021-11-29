import React, { FC } from 'react';
import { TRoutes } from '@interfaces/route';
import RouterOutlet from '@components/router-outlet/router-outlet.component';
import BaseLayout from '../../layouts/base/base.layout';
import PostPage from '@pages/post/post.page';

const routes: TRoutes = [
	{
		path: '/post',
		component: PostPage,
		exact: true,
	},
];

const PostRouting: FC = () => {
	return (
		<BaseLayout>
			<RouterOutlet routes={routes} />
		</BaseLayout>
	);
}

export default PostRouting;
