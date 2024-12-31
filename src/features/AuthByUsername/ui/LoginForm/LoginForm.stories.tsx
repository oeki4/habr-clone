import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	decorators: [StoreDecorator({
		loginForm: {username: '123', password: '123', isLoading: false},
	})],
	args: {},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK),
		StoreDecorator({ loginForm: {username: '123', password: '123', isLoading: false},
	})],
	args: {},
};


export const WithError: Story = {
	decorators: [StoreDecorator({
		loginForm: {username: '123', password: '123', isLoading: false, error: 'ERROR'},
	})],
	args: {},
};


export const InLoading: Story = {
	decorators: [StoreDecorator({
		loginForm: {username: '123', password: '123', isLoading: true},
	})],
	args: {},
};