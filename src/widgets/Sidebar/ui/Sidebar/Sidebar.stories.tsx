import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {	},
};