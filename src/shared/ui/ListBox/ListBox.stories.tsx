import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ListBox} from './ListBox';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
	title: 'shared/ListBox',
	component: ListBox,
	args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		defaultValue: 'Выберите значение',
		onChange: (value: string) => {},
		value: undefined,
		items: [
			{value: '1', content: '123'},
			{value: '2', content: '12'},
			{value: '3', content: '1', disabled: true},
		]
	},
};
