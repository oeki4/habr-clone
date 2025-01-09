import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss';
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";
import {Loader} from "shared/ui/Loader/Loader";
import {Avatar} from "shared/ui/Avatar/Avatar";

import {Currency} from "entities/Currency/model/types/currency";
import {CurrencySelect} from "entities/Currency";

import {Country} from "entities/Country/model/types/country";
import {CountrySelect} from "entities/Country/ui/CountrySelect/CountrySelect";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname?: (value?:string) => void;
    onChangeLastname?: (value?:string) => void;
    onChangeAge?: (value?:string) => void;
    onChangeCity?: (value?:string) => void;
    onChangeUsername?: (value?:string) => void;
    onChangeAvatar?: (value?:string) => void;
    onChangeCurrency?: (currency?:Currency) => void;
    onChangeCountry?: (country?:Country) => void;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly
    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(
                cls.profileCard,
                {[cls.loading]: true},
                [className]
            )}>
                <Loader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(
                cls.profileCard,
                {},
                [className, cls.error]
            )}>
                <Text
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div>
                {data?.avatar &&
                    (<div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar}/>
                    </div>)
                }
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Имя пользователя")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
               <CurrencySelect
                   className={cls.input}
                   value={data?.currency}
                   onChange={onChangeCurrency}
                   readonly={readonly}
               />
                <CountrySelect
                   className={cls.input}
                   value={data?.country}
                   onChange={onChangeCountry}
                   readonly={readonly}
               />
            </div>
        </div>
    )
}