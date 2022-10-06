import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodoItem from './index';
import TodoModel from '@domain/example-todo/models/todo.model';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Components/example-todo-item',
	component: ExampleTodoItem,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		data: {
			control: 'object',
		},
	},
} as ComponentMeta<typeof ExampleTodoItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodoItem> = (args) => (
	<ExampleTodoItem {...args} />
);

export const Default = Template.bind({});

const todo = TodoModel.create({
	id: -1,
	text: 'TodoListModel text example',
	completed: true,
});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	data: todo,
};
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
		allowFullscreen: true,
	},
};
