import renderer from 'react-test-renderer';
import React from 'react';
import Error from './error.component';

describe('ComponentLoadError component', () => {
	it('Renders correctly', () => {
		const tree = renderer
			.create(<Error />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
