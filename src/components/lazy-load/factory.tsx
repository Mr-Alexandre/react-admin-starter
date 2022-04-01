import {
	ILazyLoadProps,
	TLazyLoadFactory,
} from '@components/lazy-load/interface';
import React from 'react';
import LazyLoad from '@components/lazy-load/index';

const lazyLoadFactory: TLazyLoadFactory = (props: ILazyLoadProps) => {
	return () => (
		<LazyLoad
			loadComponent={props.loadComponent}
			fallback={props.fallback}
			error={props.error}
		/>
	);
};

export default lazyLoadFactory;
