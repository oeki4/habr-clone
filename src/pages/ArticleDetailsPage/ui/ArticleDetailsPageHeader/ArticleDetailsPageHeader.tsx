import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPageHeader.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {getArticleDetailsData} from "entities/Article";
import {getCanEditArticle} from "../../model/selectors/article";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const {className} = props;
    const {t} = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit` );
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader,{}, [className])}>
            <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit &&  <Button
                className={cls.editBtn}
                onClick={onEditArticle}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Редактировать')}
            </Button>}
        </div>
    )
}