import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodoList from './index';
import { ExampleTodoContext } from '@domain/example-todo/context/example-todo';
import TodoListModel from '@domain/example-todo/models/todo-list.model';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Components/example-todo-list',
	component: ExampleTodoList,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ExampleTodoList>;

const todoStore = TodoListModel.create({
	items: [
		{
			id: -1,
			text: 'Example todo item one',
			completed: true,
		},
		{
			id: -2,
			text: 'Example todo item two',
			completed: true,
		},
		{
			id: -3,
			text: 'Example todo item three',
			completed: true,
		},
	],
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodoList> = (args) => {
	return (
		<ExampleTodoContext.Provider value={todoStore}>
			<ExampleTodoList {...args} />
		</ExampleTodoContext.Provider>
	);
};

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
		allowFullscreen: true,
	},
};
