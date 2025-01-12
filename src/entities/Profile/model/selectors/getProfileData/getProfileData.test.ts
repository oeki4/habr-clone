import {getProfileData} from "./getProfileData";
import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe('tetProfileData', () => {
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
                data,
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})