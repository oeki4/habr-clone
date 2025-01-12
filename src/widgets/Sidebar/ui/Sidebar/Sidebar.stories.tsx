import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {	},
	decorators: [StoreDecorator({
		user: {
			authData: {},
		}
	})],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
		user: {
			authData: {},
		}
	})],
	args: {	},
};

export const NoAuth: Story = {
	decorators: [StoreDecorator({
		user: {}
	})],
	args: {	},
};