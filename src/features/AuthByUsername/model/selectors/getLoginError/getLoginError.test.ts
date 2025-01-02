import {DeepPartial} from "shared/config/types/DeepPartial";
import {StateSchema} from "app/providers/StoreProvider";
import {expect} from "@storybook/test";
import {getLoginError} from "./getLoginError";

describe("getLoginError.test", () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: '123',
            }
        };

        expect(getLoginError(state as StateSchema)).toEqual('123')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})