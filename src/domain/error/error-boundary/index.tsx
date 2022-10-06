import React, { ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { IErrorBoundaryProps as Props, IErrorBoundaryState as State } from './interface';

class ErrorBoundary extends React.Component<PropsWithChildren<Props>, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
		};
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return {
			hasError: true,
			error
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// You can also log the error to an error reporting service
		this.props?.onError?.(error, errorInfo);
	}

	render(): ReactNode {
		if (!this.state.hasError) {
			return this.props.children;
		}
		if (this.props.fallback) {
			return this.props.fallback;
		}
		return (
			<div data-testid="error-boundary">
				<h2>Something went wrong.</h2>
				<details style={{ whiteSpace: 'pre-wrap' }}>
					{this.state.error && this.state.error.toString()}
					<br />
					{this.state.errorInfo?.componentStack}
				</details>
			</div>
		);
	}
}

export default ErrorBoundary;
