import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Dropdown} from './Dropdown';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button/Button";

const meta = {
	title: 'shared/Dropdown',
	component: Dropdown,
	args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		trigger: <Button>Open</Button>,
		items: [
			{
				content: 'First'
			},
			{
				content: 'Second'
			},
			{
				content: 'Third'
			},
		]
	},
};
