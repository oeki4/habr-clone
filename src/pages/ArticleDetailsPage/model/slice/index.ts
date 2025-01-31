import {combineReducers} from "@reduxjs/toolkit";
import {
    articleDetailsPageRecommendationReducer
} from "pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationSlice";
import {articleDetailsCommentsReducer} from "../slice/articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer
})