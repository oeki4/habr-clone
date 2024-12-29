import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: 'widget/Navbar',
	component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	decorators: [StoreDecorator({})],
	args: {	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
	args: {	},
};

export const Authorized: Story = {
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
		user: {authData: {
			username: '123', id: '123'
		}}
	})],
	args: {	},
};