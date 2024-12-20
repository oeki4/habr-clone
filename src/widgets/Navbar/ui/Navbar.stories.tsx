import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const meta = {
	title: 'widget/Navbar',
	component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {	},
};