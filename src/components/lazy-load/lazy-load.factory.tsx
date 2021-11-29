import { ILazyLoadProps, TLazyLoadFactory } from '@components/lazy-load/lazy-load.interface';
import React, { FC } from 'react';
import LazyLoad from '@components/lazy-load/lazy-load.component';

const lazyLoadFactory: TLazyLoadFactory = (props: ILazyLoadProps) => {
	return () => (
		<LazyLoad
			loadComponent={props.loadComponent}
			fallback={props.fallback}
			error={props.error}
		/>
	)
}

export default lazyLoadFactory;
