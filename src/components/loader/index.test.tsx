import React from 'react';
import Loader from './index';
import { renderWithProviders } from '@utils/test';
import { screen } from '@testing-library/react';

describe('Components/Loader', () => {
	it('should rendered', () => {
		renderWithProviders(
			<Loader />
		);
		expect(screen.getByTestId('loader')).toBeInTheDocument();
	});

	it('check title text', () => {
		renderWithProviders(
			<Loader />
		);
		expect(screen.getByTestId('loader')).toHaveTextContent('Component is loading...');
	});
});
