import ErrorBoundary from '@components/error-boundary/error-boundary.component';
import React, { ErrorInfo, FC } from 'react';
import { IErrorBoundaryPickProps } from '@components/error-boundary/pick/error-boundary-pick.interface';

const ErrorBoundaryPick: FC<IErrorBoundaryPickProps> = (props) => {
	const handleError = (error: Error | null, info: ErrorInfo | null) => {
		if (error?.name && !props.pickErrorNames.includes(error.name)) {
			throw error;
		}
	};

	return (
		<ErrorBoundary onError={handleError} {...props} />
	);
};

export default ErrorBoundaryPick;
