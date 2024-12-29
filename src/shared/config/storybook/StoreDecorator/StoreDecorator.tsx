import 'app/styles/index.scss';
import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";

export const StoreDecorator = (state: StateSchema) => (Story: StoryFn)=> {
    return (
        <StoreProvider initialState={state}>
            <Story/>
        </StoreProvider>
    )
};