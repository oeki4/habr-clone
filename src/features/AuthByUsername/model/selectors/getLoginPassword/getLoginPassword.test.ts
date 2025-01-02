import {DeepPartial} from "shared/config/types/DeepPartial";
import {StateSchema} from "app/providers/StoreProvider";
import {expect} from "@storybook/test";
import {getLoginPassword} from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            }
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})