import cls from './ProfilePageHeader.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";
import {useSelector} from "react-redux";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t("Профиль")}/>
            {readonly ?
                (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                        >
                        {t("Редактировать")}
                    </Button>
                ) :
                (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onSave}
                        >
                            {t("Сохранить")}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.saveBtn}
                            onClick={onCancelEdit}
                        >
                            {t("Отменить")}
                        </Button>
                    </>
                )
            }

        </div>
    )
}