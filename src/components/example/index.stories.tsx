import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Example from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Example',
	component: Example,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		label: {
			control: 'text',
		},
	},
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Example> = (args) => (
	<Example {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	label: 'Text label',
};
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
		allowFullscreen: true,
	},
};
