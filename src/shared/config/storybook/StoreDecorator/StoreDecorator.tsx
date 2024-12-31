import 'app/styles/index.scss';
import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: StoryFn)=> {
    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
        >
            <Story/>
        </StoreProvider>
    )
};