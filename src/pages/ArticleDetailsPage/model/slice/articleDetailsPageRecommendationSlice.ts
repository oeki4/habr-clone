import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

import {
    ArticleDetailsPageRecommendationSchema
} from "pages/ArticleDetailsPage/model/types/ArticleDetailsPageRecommendationSchema";
import {Article} from "entities/Article";
import {
    fetchArticleRecommendations
} from "pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {
        },
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    },
})

export const { actions: articleDetailsPageRecommendationActions } = articleDetailsPageRecommendationSlice
export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendationSlice