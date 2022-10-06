import React, { MouseEvent } from 'react';

export interface IExampleTodoClearProps
	extends React.HTMLAttributes<HTMLButtonElement> {
	handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
