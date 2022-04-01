import React, { FC } from 'react';

export interface ILazyLoadProps {
	loadComponent: () => Promise<{ default: React.ComponentType<any> }>;
	fallback?: React.ComponentType<any>;
	error?: React.ComponentType<any>;
}

export type TLazyLoadFactory = (props: ILazyLoadProps) => FC<ILazyLoadProps>;
