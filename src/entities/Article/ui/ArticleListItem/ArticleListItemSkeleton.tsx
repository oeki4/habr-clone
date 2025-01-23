import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import {memo} from "react";
import {ArticleView} from "../../model/types/article";
import {Card} from "shared/ui/Card/Card";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ArticleListItemSkeletonProps {
	className?: string;
	view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {

	const {className, view} = props;

	if(view === ArticleView.BIG) {
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Skeleton height={30} border={'50%'} width={30}/>
						<Skeleton width={150} height={16} className={cls.username}/>
						<Skeleton width={150} height={16} className={cls.date}/>
					</div>
					<Skeleton width={250} height={24} className={cls.title}/>
					<Skeleton height={200} className={cls.img}/>
					<div className={cls.footer}>
						<Skeleton height={36} width={200}/>
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
			<Card className={cls.card}>
				<div className={cls.imageWrapper}>
					<Skeleton width={200} height={200} className={cls.img}/>
					<div className={cls.infoWrapper}>
						<Skeleton width={130} height={16}/>
					</div>
					<Skeleton width={150} height={16} className={cls.title}/>
				</div>
			</Card>
		</div>
	);
});