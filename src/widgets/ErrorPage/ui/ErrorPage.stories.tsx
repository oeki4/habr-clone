import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ErrorPage} from "widgets/ErrorPage";

const meta = {
	title: 'widget/ErrorPage',
	component: ErrorPage
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {	},
};