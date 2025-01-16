import type {Meta, StoryObj} from '@storybook/react';
import {Code} from './Code';

const meta = {
	title: 'shared/Code',
	component: Code,
	args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;'
	},
};
