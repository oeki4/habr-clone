import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {
	Action,
	EnhancedStore,
	Reducer,
	ReducersMapObject
} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router";
import {ArticleDetailsSchema} from "entities/Article";
import {ArticleDetailsCommentsSchema} from "pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "features/addCommentForm";
import {ArticlePageSchema} from "pages/ArticlesPage";


export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;

	loginForm: LoginSchema;
	profile: ProfileSchema;
	articleDetails: ArticleDetailsSchema;
	articleDetailsComments: ArticleDetailsCommentsSchema;
	addCommentForm: AddCommentFormSchema;
	articlesPage: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers =  OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => Partial<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}