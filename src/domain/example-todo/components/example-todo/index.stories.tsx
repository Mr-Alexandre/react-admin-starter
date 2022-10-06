import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodo from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Components/example-todo',
	component: ExampleTodo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		todos: {
			control: 'object',
		},
	},
} as ComponentMeta<typeof ExampleTodo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodo> = (args) => (
	<ExampleTodo {...args} />
);

export const Default = Template.bind({});
const todoItems = [
	{
		id: -1,
		text: 'One todo item',
		completed: false,
	},
	{
		id: -2,
		text: 'Two todo item',
		completed: true,
	},
];

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	todos: todoItems,
};
