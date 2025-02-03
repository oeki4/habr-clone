import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from 'shared/ui/Text/Text';
import {useTranslation} from "react-i18next";
import {List, ListRowProps, WindowScroller} from "react-virtualized";
import {PAGE_ID} from "widgets/Page/Page";

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
	<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
))

export const ArticleList = memo((props: ArticleListProps) => {

	const {
		className,
		articles,
		view = ArticleView.SMALL,
		isLoading,
		target
	} = props;

	const {t} = useTranslation('article');

	const isBig = view === ArticleView.BIG;

	const itemsPerRow = isBig ? 1 : 3;

	const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

	const rowRender = ({index, isScrolling, key, style, }: ListRowProps) => {
		const items = [];
		const fromIndex = index * itemsPerRow;
		const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

		for(let i = fromIndex; i < toIndex; i++) {
			items.push(
				<ArticleListItem
					article={articles[index]}
					view={view}
					className={cls.card}
					target={target}
					key={'str'+i}
				/>
			)
		}

		return (
			<div key={key} style={style} className={cls.row}>
				{
					items
				}
			</div>
		)
	}


	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				article={article}
				view={view}
				className={cls.card}
				key={article.id}
				target={target}
			/>
		)
	}

	if(!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t("Статьи не найдены")}/>
			</div>
		)
	}

	return (
		// <WindowScroller
		// 	onScroll={() => console.log('scroll')}
		// 	scrollElement={document.getElementById(PAGE_ID) as Element}
		// >
		// 	{({width, height, registerChild, scrollTop, onChildScroll, isScrolling}) => (
		// 		<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
		// 			<List
		// 				height={height ?? 700}
		// 				rowCount={rowCount}
		// 				rowHeight={isBig ? 700 : 330}
		// 				rowRenderer={rowRender}
		// 				width={width ? width - 80 : 700}
		// 				autoHeight
		// 				onScroll={onChildScroll}
		// 				isScrolling={isScrolling}
		// 				scrollTop={scrollTop}
		// 			/>
		// 		</div>
		// 	)}
		// </WindowScroller>
		// <AutoSizer disableHeight>
		// 	{({width, height}) => (
		// 		<List
		// 			height={500}
		// 			rowCount={articles.length}
		// 			rowHeight={500}
		// 			rowRenderer={() => <div>row</div>}
		// 			width={width}
		// 		/>
		// 	)}
		// </AutoSizer>
		<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
			{
				articles.length > 0
					? articles.map(renderArticle)
					: null
			}
			{isLoading && getSkeletons(view)}
		</div>
	);
});