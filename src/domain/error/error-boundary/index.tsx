import React, { ErrorInfo, ReactNode } from 'react';
import { IErrorBoundaryProps as Props, IErrorBoundaryState as State, } from './interface';

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
			errorInfo: errorInfo,
		});
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
			<div>
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
