import React from 'react';
import renderer from 'react-test-renderer';
import { TExampleProps } from '@components/example/example.interface';
import Example from '@components/example/example.component';

describe('Example component', () => {
	it('Renders correctly', () => {
		const props: TExampleProps = {
			title: 'Test text',
		};
		const tree = renderer
			.create(<Example {...props} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
