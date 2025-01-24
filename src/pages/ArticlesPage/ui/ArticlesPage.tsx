import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {memo, useCallback} from "react";
import {ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePageActions, articlePageReducer, getArticles} from "../model/slices/articlePageSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesList} from "../model/services/fetchArticlesList/fetchArticlesList";
import {useSelector} from "react-redux";
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesView
} from "../model/selectors/articlesPageSelectors";

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlePageReducer,
}

const ArticlesPage = ({className}: ArticlesPageProps) => {

	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesView);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlePageActions.setView(view))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchArticlesList());
		dispatch(articlePageActions.initState())
	})

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ArticlesPage, {}, [className])}>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
				<ArticleList
					view={view}
					isLoading={isLoading}
					articles={articles}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);