import type { Meta, StoryObj } from '@storybook/react';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/'
	}
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.PRIMARY
	},
};

export const Secondary: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.SECONDARY
	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		children: "Text",
		theme: AppLinkTheme.SECONDARY
	},
};