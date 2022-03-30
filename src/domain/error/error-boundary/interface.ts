import React, { ErrorInfo } from 'react';

export interface IErrorBoundaryProps {
	readonly fallback?: React.ElementType;
	readonly onError?: (error: Error | null, info: ErrorInfo | null) => void;
}

export interface IErrorBoundaryState {
	readonly hasError: boolean;
	readonly error: Error | null;
	readonly errorInfo: ErrorInfo | null;
}
