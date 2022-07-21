import React, { FC, lazy, Suspense } from 'react';
import { ILazyLoadProps } from '@components/lazy-load/interface';

const LazyLoad: FC<ILazyLoadProps> = (props) => {
	const LazyComponent = lazy(props.loadComponent);
	const Empty = () => <div>Empty</div>;
	const Loading = props.fallback || <Empty />;

	return (
		<Suspense fallback={props.fallback ? Loading : null}>
			<LazyComponent />
		</Suspense>
	);
};

export default LazyLoad;
