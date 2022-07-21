import React from 'react';
import renderer from 'react-test-renderer';
import { IExampleProps } from '@domain/example/components/example-todo/interface';
import ExampleTodo from '@domain/example/components/example-todo/index';

describe('Example component', () => {
	it('Renders correctly', () => {
		const props: IExampleProps = {
			title: 'Test text',
		};
		const tree = renderer.create(<ExampleTodo {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
