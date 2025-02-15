import {getProfileForm} from "./getProfileForm";
import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe('getProfileError', () => {
    test('should return counter value', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Хрячков',
            first: 'Никита',
            city: '123',
            currency: Currency.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            }
        }
        expect(getProfileForm(state as StateSchema)).toBe(data)
    })

    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toBe(undefined)
    })
})