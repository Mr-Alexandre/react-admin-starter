import { ErrorInfo, ReactNode } from 'react';

export interface IErrorBoundaryProps {
	readonly fallback?: NonNullable<ReactNode> | null;
	readonly onError?: (error: Error | null, info: ErrorInfo | null) => void;
}

export interface IErrorBoundaryState {
	readonly hasError: boolean;
	readonly error: Error | null;
	readonly errorInfo: ErrorInfo | null;
}
