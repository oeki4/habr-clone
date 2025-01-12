import {getProfileValidateErrors} from "./getProfileValidateErrors";
import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {ValidateProfileError} from "entities/Profile";

describe('getProfileValidateErrors', () => {
    test('should return value', () => {
        const data = [ValidateProfileError.NO_DATA]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: data
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
    })
})