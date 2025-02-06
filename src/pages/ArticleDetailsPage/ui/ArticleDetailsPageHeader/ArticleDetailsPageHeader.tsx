import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getArticleDetailsData} from "entities/Article";
import {getCanEditArticle} from "../../model/selectors/article";
import {HStack} from "shared/ui/Stack";

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
        <HStack max justify={'between'} className={classNames('',{}, [className])}>
            <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit &&  <Button
                onClick={onEditArticle}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Редактировать')}
            </Button>}
        </HStack>
    )
}