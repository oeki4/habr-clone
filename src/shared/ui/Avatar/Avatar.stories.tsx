import type { Meta, StoryObj } from '@storybook/react';
import {Avatar} from "./Avatar";
import AvatarImg from './avatar.jpg'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
        alt: 'img'
    },
};


export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
        alt: 'img'
    },
};
