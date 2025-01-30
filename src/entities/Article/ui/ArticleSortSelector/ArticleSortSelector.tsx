import {memo, useMemo} from "react";
import cls from './ArticleSortSelector.module.scss';
import {Select, SelectOption} from "shared/ui/Select/Select";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleSortField} from "entities/Article/model/types/article";
import {SortOrder} from "shared/types";

export interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {className, order, onChangeOrder, onChangeSort, sort} = props;
    const {t} = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по: ')}
            />
            <Select
                className={cls.order}
                onChange={onChangeOrder}
                value={order}
                options={orderOptions}
                label={t('Сортировать по: ')}
            />
        </div>
    )
})