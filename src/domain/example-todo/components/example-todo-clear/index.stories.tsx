import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ExampleTodoClear from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Domain/Example-todo/Components/example-todo-clear',
	component: ExampleTodoClear,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ExampleTodoClear>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleTodoClear> = (args) => (
	<ExampleTodoClear {...args} />
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

export const PseudoStates: ComponentStory<typeof ExampleTodoClear> = (args) => {
	return (
		<>
			<ExampleTodoClear id="one" {...args} />
			<ExampleTodoClear id="two" {...args} />
			<ExampleTodoClear id="three" {...args} />
		</>
	);
};

PseudoStates.parameters = {
	pseudo: {
		hover: ['#one', '#two', '#three'],
		focus: ['#two', '#three'],
		active: '#three',
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
		allowFullscreen: true,
	},
};
PseudoStates.args = {};
