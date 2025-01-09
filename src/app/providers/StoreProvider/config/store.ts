import {
	Action,
	configureStore,
	ReducersMapObject,
	ThunkDispatch,
} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";
import {$api} from "shared/api/api";
import {NavigateOptions, To} from "react-router";


export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void,
) {

	// @ts-ignore
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<
		StateSchema>({
		// @ts-ignore
		reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		// @ts-ignore
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate
				}
			}
		})
		,
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ThunkDispatch<any, any, Action>;