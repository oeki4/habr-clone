import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {
    getArticlesPageInited,
} from "../../selectors/articlesPageSelectors";
import {articlePageActions} from "../../slices/articlePageSlice";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
    'articleDetails/initArticlesPage',
    async (_, thunkAPI)=> {
        const {getState, dispatch} = thunkAPI;
        const inited = getArticlesPageInited(getState());


        if(!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    }
)