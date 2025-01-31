import {ArticleDetailsPageRecommendationSchema} from "./ArticleDetailsPageRecommendationSchema";
import {ArticleDetailsCommentsSchema} from "./ArticleDetailsCommentsSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationSchema;
}