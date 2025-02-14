import { memo } from "react";
import { ArticleList } from "entities/Article";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlePageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { useSearchParams } from "react-router";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text } from "shared/ui/Text/Text";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();
    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });

    if (error) {
      return <Text text={"Error!"} />;
    }

    return (
      <ArticleList
        view={view}
        isLoading={isLoading}
        articles={articles}
        className={className}
      />
    );
  },
);
