import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Text, TextSize, TextTheme} from "./Text";

const meta = {
	title: 'shared/Text',
	component: Text,
	args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Title',
		text: 'text'
	},
}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		title: 'Title',
		text: 'text'
	},
}

export const OnlyTitle: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		title: 'Title',
	},
}

export const OnlyText: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		text: 'text'
	},
}

export const Error: Story = {
	args: {
		title: 'Title',
		text: 'text',
		theme: TextTheme.ERROR,
	},
}

export const SizeL: Story = {
	args: {
		title: 'Title',
		text: 'text',
		size: TextSize.L,
	},
}
