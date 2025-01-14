import type {Meta, StoryObj} from '@storybook/react';
import ArticlesPage from './ArticlesPage';

const meta = {
	title: 'shared/ArticlesPage',
	component: ArticlesPage,
	args: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
