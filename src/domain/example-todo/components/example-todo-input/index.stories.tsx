import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodoInput from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Components/example-todo-input',
	component: ExampleTodoInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ExampleTodoInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodoInput> = (args) => (
	<ExampleTodoInput {...args} />
);

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
