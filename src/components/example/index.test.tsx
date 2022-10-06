import React from 'react';
import Example from './index';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test';

describe('Components/Example', () => {
	it('should rendered', () => {
		renderWithProviders(
			<Example label='Hello' />
		);
		expect(screen.getByTestId('title')).toBeInTheDocument();
		expect(screen.getByTestId('subtitle')).toBeInTheDocument();
		expect(screen.getByTestId('button')).toBeInTheDocument();
	});

	it('check title text', () => {
		renderWithProviders(
			<Example label='Hello' />
		);
		expect(screen.getByTestId('title')).toHaveTextContent('Example: Hello');
	});
});
