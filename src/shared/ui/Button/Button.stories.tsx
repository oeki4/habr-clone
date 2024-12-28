import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {Button, ButtonTheme, ButtonSize} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Text"
	},
};

export const Clear: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
};


export const OutlineDark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
};

export const BackgroundTheme: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundThemeInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};


export const SquareSizeL: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};


export const SquareSizeXL: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};


export const OutlineSizeL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineSizeXL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};


