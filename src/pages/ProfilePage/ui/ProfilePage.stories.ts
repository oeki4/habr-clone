import type { Meta, StoryObj } from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'Хрячков',
                first: 'Никита',
                city: '123',
                currency: Currency.USD,
            }
        }
    })],
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'Хрячков',
                first: 'Никита',
                city: '123',
                currency: Currency.USD,
            }
        }
    })],
    args: {},
};