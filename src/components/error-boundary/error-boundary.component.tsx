import React, { ErrorInfo, ReactNode } from 'react';
import {
	TErrorBoundaryProps as Props,
	TErrorBoundaryState as State
} from '@components/error-boundary/error-boundary.interface';

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		this.setState({
			hasError: true,
			error: error,
			errorInfo: errorInfo
		});
	}

	render(): ReactNode {
		if (this.state.hasError && this.props.fallback) {
			const Fallback = this.props.fallback;
			return <Fallback />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
