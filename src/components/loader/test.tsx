import renderer from 'react-test-renderer';
import React from 'react';
import Loader from './index';

describe('ComponentLoadLoader component', () => {
	it('Renders correctly', () => {
		const tree = renderer.create(<Loader />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
