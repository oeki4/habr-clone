import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from './CommentList';

const meta = {
	title: 'shared/CommentList',
	component: CommentList,
	args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
