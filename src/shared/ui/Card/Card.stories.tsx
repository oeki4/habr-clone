import type {Meta, StoryObj} from '@storybook/react';
import {Card} from './Card';
import {Text} from 'shared/ui/Text/Text'


const meta = {
	title: 'shared/Card',
	component: Card,
	args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: <Text text={'Text'} title={'Title'}/>
	},
};
