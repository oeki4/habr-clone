import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Input} from "./Input";

const meta = {
	title: 'shared/Input',
	component: Input,
	args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Input text',
		value: '123'
	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		placeholder: 'Input text',
		value: '123'
	},
};

export const Autofocused: Story = {
	args: {
		placeholder: 'Input text',
		value: '123',
		autofocus: true,
	},
};