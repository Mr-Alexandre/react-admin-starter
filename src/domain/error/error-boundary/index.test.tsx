import React from 'react';
import ErrorBoundary from './index';
import { renderWithProviders } from '@utils/test';
import { screen } from '@testing-library/react';

describe('Components/Error-boundary', () => {
	it('should rendered component without error', () => {
		const Content = () => {
			return (
				<h1 data-testid="content">Content</h1>
			)
		};
		renderWithProviders(
			<ErrorBoundary>
				<Content/>
			</ErrorBoundary>
		);
		expect(screen.getByTestId('content')).toBeVisible();
	});

	it('should show fallback on error', () => {
		const ThrowError = () => {
			throw new Error('Simulate error');
		};
		const Fallback = () => (
			<h1 data-testid="fallback">Fallback component</h1>
		);
		renderWithProviders(
			<ErrorBoundary fallback={<Fallback />}>
				<ThrowError />
			</ErrorBoundary>
		);
		expect(screen.getByTestId('fallback')).toBeVisible();
	});

	it('should show default message without fallback on error', () => {
		const ThrowError = () => {
			throw new Error('Simulate error');
		};
		renderWithProviders(
			<ErrorBoundary>
				<ThrowError />
			</ErrorBoundary>
		);
		expect(screen.getByTestId('error-boundary')).toBeVisible();
	});
});
