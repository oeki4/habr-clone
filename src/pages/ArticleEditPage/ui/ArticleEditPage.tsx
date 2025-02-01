import cls from './ArticleEditPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Page} from "widgets/Page/Page";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const {className} = props;
    const {t} = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);


    return (
        <Page
            className={classNames(cls.articleEditPage, {}, [className])}
        >
            {
                isEdit ? ('Редактирование статьи с ID = ' + id) : "Создание новой статьи"
            }
        </Page>
    )
}

export default ArticleEditPage;