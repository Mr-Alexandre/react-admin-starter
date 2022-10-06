import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodoDetailPage from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Pages/detail',
	component: ExampleTodoDetailPage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ExampleTodoDetailPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodoDetailPage> = (args) => (
	<ExampleTodoDetailPage {...args} />
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
	nextRouter: {
		path: '/todo/[id]',
		asPath: '/todo/-1',
		query: {
			id: -1,
		},
	},
};
