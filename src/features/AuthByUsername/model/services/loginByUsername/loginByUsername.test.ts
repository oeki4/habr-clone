import {loginByUsername} from "./loginByUsername";
import {expect} from "@storybook/test";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/config/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername.test", () => {
    test('success response', async () => {
        const userValue = {username: '123', id: '1'};

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValueOnce(Promise.resolve({
            data: userValue
        }));

        const result = await thunk.callThunk({username: '123', password: '123'});

        await expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        await expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        await expect(thunk.api.post).toHaveBeenCalled();
        await expect(result.meta.requestStatus).toBe('fulfilled');
        await expect(result.payload).toBe(userValue);
    })

    test('response with error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValueOnce(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk({username: '123', password: '123'});

        await expect(thunk.api.post).toHaveBeenCalled();
        await expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        await expect(result.meta.requestStatus).toBe('rejected');
        await expect(result.payload).toBe('Неверный логин или пароль');
    })


    // test('success response', async () => {
    //     const userValue = {username: '123', id: '1'};
    //     mockedAxios.post.mockReturnValueOnce(Promise.resolve({
    //         data: userValue
    //     }));
    //
    //     const action = loginByUsername({username: '123', password: '123'});
    //     const result = await action(dispatch, getState, undefined);
    //
    //     await expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     await expect(dispatch).toHaveBeenCalledTimes(3);
    //     await expect(mockedAxios.post).toHaveBeenCalled();
    //     await expect(result.meta.requestStatus).toBe('fulfilled');
    //     await expect(result.payload).toBe(userValue);
    //
    // })
    //
    //
    // test('response with error', async () => {
    //     mockedAxios.post.mockReturnValueOnce(Promise.resolve({
    //         status: 403,
    //     }));
    //
    //     const action = loginByUsername({username: '123', password: '123'});
    //     const result = await action(dispatch, getState, undefined);
    //
    //     await expect(mockedAxios.post).toHaveBeenCalled();
    //     await expect(dispatch).toHaveBeenCalledTimes(2);
    //     await expect(result.meta.requestStatus).toBe('rejected');
    //     await expect(result.payload).toBe('Неверный логин или пароль');
    // })

})