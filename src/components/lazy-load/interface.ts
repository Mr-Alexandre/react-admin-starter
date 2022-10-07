import React, { FC, ReactNode } from 'react';

export interface ILazyLoadProps {
	//eslint-disable-next-line @typescript-eslint/no-explicit-any
	loadComponent: () => Promise<{ default: React.ComponentType<any> }>;
	fallback?: NonNullable<ReactNode> | null;
	error?: NonNullable<ReactNode> | null;
}

export type TLazyLoadFactory = (props: ILazyLoadProps) => FC<ILazyLoadProps>;
