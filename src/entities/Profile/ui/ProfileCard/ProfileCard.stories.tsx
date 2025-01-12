import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {ProfileCard} from "./ProfileCard";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import TestAvatar from 'shared/assets/test/avatar.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    decorators: [StoreDecorator({})],
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Хрячков',
            first: 'Никита',
            city: '123',
            currency: Currency.USD,
            avatar: TestAvatar,
        }
    },
};

export const WithError: Story = {
    decorators: [StoreDecorator({})],
    args: {
        error: 'Error!'
    },
};

export const Loading: Story = {
    decorators: [StoreDecorator({})],
    args: {
        isLoading: true
    },
};