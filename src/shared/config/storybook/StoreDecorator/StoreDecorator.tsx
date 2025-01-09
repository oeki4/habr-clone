import 'app/styles/index.scss';
import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {profileReducer} from "entities/Profile";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
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