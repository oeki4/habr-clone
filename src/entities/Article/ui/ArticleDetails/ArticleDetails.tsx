import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "entities/Article/model/slice/articleDetailsSlice";
import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import {Icon} from "shared/ui/Icon/Icon";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {HStack, VStack} from "shared/ui/Stack";

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const {
		className,
		id
	} = props;

	const {t} = useTranslation('article');

	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		if(__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id))
		}
	}, [dispatch, id]);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch(block.type) {
			case ArticleBlockType.CODE:
				return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block}/>
			case ArticleBlockType.IMAGE:
				return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block}/>
			case ArticleBlockType.TEXT:
				return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>
			default:
				return null;
		}
	}, [])

	let content;

	if(isLoading) {
		content = (
			<div>
				<Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
				<Skeleton className={cls.title} width={300} height={24}/>
				<Skeleton className={cls.skeleton} width={600} height={24}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
			</div>
		)
	} else if(error) {
		content = (
			<Text
				title={t("Произошла ошибка при загрузке статьи")}
				align={TextAlign.CENTER}
				theme={TextTheme.ERROR}
			/>
		)
	} else {
		content = (
			<>
				<HStack justify={'center'} max className={cls.avatarWrapper}>
					<Avatar size={200} src={article?.img} className={cls.avatar}/>
				</HStack>
				<VStack max gap={'4'}>
					<Text
						size={TextSize.L}
						className={cls.title}
						title={article?.title}
						text={article?.subtitle}
					/>
					<HStack gap={'8'} className={cls.articleInfo}>
						<Icon Svg={EyeIcon} className={cls.icon}/>
						<Text text={article?.views.toString()}/>
					</HStack>
					<HStack gap={'8'} className={cls.articleInfo}>
						<Icon Svg={CalendarIcon} className={cls.icon}/>
						<Text text={article?.createdAt}/>
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<VStack gap={'16'} className={classNames(cls.articleDetails, {}, [className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});