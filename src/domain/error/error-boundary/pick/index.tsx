import ErrorBoundary from '../index';
import React, { ErrorInfo, FC } from 'react';
import { IErrorBoundaryPickProps } from './interface';

const ErrorBoundaryPick: FC<IErrorBoundaryPickProps> = (props) => {
	const handleError = (error: Error | null, info: ErrorInfo | null) => {
		if (error?.name && !props.pickErrorNames.includes(error.name)) {
			throw error;
		}
	};

	return <ErrorBoundary onError={handleError} {...props} />;
};

export default ErrorBoundaryPick;
