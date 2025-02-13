import {getProfileReadonly} from "./getProfileReadonly";
import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";

describe('getProfileReadonly', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toBe(false)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined)
    })
})