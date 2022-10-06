import React from 'react';
import Error from './index';
import { renderWithProviders } from '@utils/test';
import { screen } from '@testing-library/react';

describe('Components/Error', () => {
	it('should rendered', () => {
		renderWithProviders(
			<Error />
		);
		expect(screen.getByTestId('error')).toBeInTheDocument();
	});
});
