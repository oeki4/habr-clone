import type {Meta, StoryObj} from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import {fn} from "@storybook/test";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	args: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	decorators: [StoreDecorator({
		addCommentForm: {
			text: ''
		}
	})],
	args: {
		onSendComment: fn
	},
};
