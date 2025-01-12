import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {validateProfileData} from "./validateProfileData";
import {ValidateProfileError} from "entities/Profile";

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Хрячков',
    first: 'Никита',
    city: '123',
    currency: Currency.USD,
}

describe("validateProfileData", () => {
    test('success', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    })

    test('without firstname and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    })

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    })

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    })

    test('incorrect data', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    })

})