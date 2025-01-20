import type {Meta, StoryObj} from '@storybook/react';
import {CommentCard} from './CommentCard';

const meta = {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		isLoading: false,
		comment: {
			id: '1',
			text: 'Comment text',
			user: {
				id: "1",
				username: 'user1'
			}
		}
	},
};

export const InLoading: Story = {
	args: {
		isLoading: true,
		comment: {
			id: '1',
			text: 'Comment text',
			user: {
				id: "1",
				username: 'user1'
			}
		}
	},
};
