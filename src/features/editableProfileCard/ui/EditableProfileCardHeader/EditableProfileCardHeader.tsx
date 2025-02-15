import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getProfileData } from "features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "features/editableProfileCard/model/slice/profileSlice";
import { updateProfileData } from "features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation("profile");
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id.toString() === profileData?.id;

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
      <HStack
        max
        justify={"between"}
        className={classNames("", {}, [className])}
      >
        <Text title={t("Профиль")} />
        {canEdit && (
          <>
            {readonly ? (
              <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                {t("Редактировать")}
              </Button>
            ) : (
              <HStack gap={"8"}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                  {t("Сохранить")}
                </Button>
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                  {t("Отменить")}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  },
);
