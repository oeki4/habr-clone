import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError, getProfileForm,
    getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from "entities/Profile";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useParams} from "react-router";

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const error = useSelector(getProfileError);
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const validateErrors = useSelector(getProfileValidateErrors);
    const {t} = useTranslation('profile');
		const {id} = useParams<{id: string}>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные имя или фамилия'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.NO_DATA]: t('Не заполнены данные'),
    }

		useInitialEffect(() => {
			if(id) {
				dispatch(fetchProfileData(id));
			}
		})

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            first: value || '',
        }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value  || 0),
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value || '',
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || '',
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency,
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({
            country,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]}/>
                ))}
                <ProfileCard
                   data={formData}
                   error={error}
                   isLoading={isLoading}
                   onChangeFirstname={onChangeFirstName}
                   onChangeLastname={onChangeLastname}
                   onChangeAge={onChangeAge}
                   onChangeCity={onChangeCity}
                   onChangeAvatar={onChangeAvatar}
                   onChangeUsername={onChangeUsername}
                   readonly={readonly}
                   onChangeCurrency={onChangeCurrency}
                   onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage;