import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails} from "entities/Article";
import {useNavigate, useParams} from "react-router";
import {Text} from 'shared/ui/Text/Text';
import {CommentList} from "entities/Comment";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsCommentsReducer, getArticleComments} from "../model/slice/articleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsError, getArticleCommentsIsLoading} from "../model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
	fetchCommentsByArticleId
} from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../model/services/addCommentForArticle/addCommentForArticle";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "widgets/Page/Page";

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {

	const {className} = props;
	const {t} = useTranslation('article');
	const {id} = useParams<{id: string}>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const commentsError = useSelector(getArticleCommentsError);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	if(!id) {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t("Статья не найдена")}
			</div>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
					{t('Назад к списку')}
				</Button>
				<ArticleDetails id={id}/>
				<Text className={cls.commentTitle} title={t("Комментарии")}/>
				<AddCommentForm onSendComment={onSendComment}/>
				<CommentList isLoading={commentsIsLoading} comments={comments}/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);