import React from 'react';
import renderer from 'react-test-renderer';
import { IExampleProps } from '@components/example/interface';
import Example from '@components/example/index';

describe('Example component', () => {
	it('Renders correctly', () => {
		const props: IExampleProps = {
			title: 'Test text',
		};
		const tree = renderer.create(<Example {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
