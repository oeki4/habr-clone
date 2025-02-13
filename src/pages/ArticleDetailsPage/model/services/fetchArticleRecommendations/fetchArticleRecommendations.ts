import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "entities/Article";


export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (
        _,
        {extra, rejectWithValue}
    ) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                }
            });

            if(!response.data) {
                throw new Error('No data!');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }

    }
)