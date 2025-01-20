import 'app/styles/index.scss';
import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {profileReducer} from "entities/Profile";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {articleDetailsCommentsReducer} from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer
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