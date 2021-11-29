import React, { FC, lazy, Suspense } from 'react';
import { ILazyLoadProps } from '@components/lazy-load/lazy-load.interface';
import ErrorBoundary from '@components/error-boundary/error-boundary.component';

const LazyLoad: FC<ILazyLoadProps> = (props) => {
	const LazyComponent = lazy(props.loadComponent);
	const Empty = () => <div>Empty</div>;
	const Loading = props.fallback || Empty;

	return (
		<ErrorBoundary fallback={props.error}>
			<Suspense fallback={props.fallback ? <Loading /> : null}>
				<LazyComponent />
			</Suspense>
		</ErrorBoundary>
	)
}

export default LazyLoad;
