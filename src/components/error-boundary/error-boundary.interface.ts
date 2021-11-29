import React, { ErrorInfo } from 'react';

export type TErrorBoundaryProps = {
	readonly fallback?: React.ElementType
}

export type TErrorBoundaryState = {
	readonly hasError: boolean
	readonly error: Error | null
	readonly errorInfo: ErrorInfo | null
}
