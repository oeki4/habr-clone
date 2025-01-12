import {getProfileError} from "./getProfileError";
import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";

describe('getProfileError', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Error'
            }
        }
        expect(getProfileError(state as StateSchema)).toBe('Error')
    })

    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toBe(undefined)
    })
})