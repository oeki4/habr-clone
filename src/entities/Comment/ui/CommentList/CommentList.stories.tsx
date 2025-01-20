import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from './CommentList';

const meta = {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		comments: [
			{
				user: {
					id: '1',
					username: 'user1',
				},
				id: '123',
				text: 'Comment text',
			},
			{
				user: {
					id: '2',
					username: 'user1',
				},
				id: '124',
				text: 'Comment text',
			}
		]
	},
};


export const InLoading: Story = {
	args: {
		isLoading: true
	},
};
