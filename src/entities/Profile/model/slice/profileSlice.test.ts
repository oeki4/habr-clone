import {DeepPartial} from "shared/config/types/DeepPartial";
import {Profile, ProfileSchema, ValidateProfileError} from "../types/profile";
import {profileReducer, profileActions} from "./profileSlice";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {updateProfileData} from "entities/Profile";


const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Хрячков',
    first: 'Никита',
    city: '123',
    currency: Currency.USD,
}

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(
            profileReducer(state as ProfileSchema,
                profileActions.setReadonly(true)
            )).toEqual({
            readonly: true,
        });
    })

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {
                username: ''
            }};
        expect(
            profileReducer(state as ProfileSchema,
                profileActions.cancelEdit()
            )).toEqual({
            readonly: true,
            data,
            form: data,
            validateErrors: undefined,
        });
    })

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {form: {
                username: '123'
            }};
        expect(
            profileReducer(state as ProfileSchema,
                profileActions.updateProfile({
                    username: '123456'
                })
            )).toEqual({
            form: {
                username: '123456'
            },
        });
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(
            profileReducer(state as ProfileSchema,
                updateProfileData.pending('')
            )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema,
                updateProfileData.fulfilled(data, '')
            )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    })
})