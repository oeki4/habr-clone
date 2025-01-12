import {fetchProfileData} from "./fetchProfileData";
import {TestAsyncThunk} from "shared/config/tests/TestAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe("fetchProfileData", () => {
    test('success', async () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Хрячков',
            first: 'Никита',
            city: '123',
            currency: Currency.USD,
        }

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValueOnce(Promise.resolve({
            data,
        }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

    })

    test('with error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValueOnce(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');

    })

})