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
import {HStack, VStack} from "shared/ui/Stack";

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
            <HStack justify={'center'} className={classNames(
                cls.profileCard,
                {[cls.loading]: true},
                [className]
            )}>
                <Loader/>
            </HStack>
        )
    }

    if(error) {
        return (
            <HStack justify={'center'} className={classNames(
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
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <VStack gap={'16'} max className={classNames(cls.profileCard, mods, [className])}>
                {data?.avatar &&
                    (<HStack justify={'center'} max	>
                        <Avatar src={data?.avatar}/>
                    </HStack>)
                }
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Имя пользователя")}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Аватар")}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
               <CurrencySelect
                   value={data?.currency}
                   onChange={onChangeCurrency}
                   readonly={readonly}
               />
                <CountrySelect
                   value={data?.country}
                   onChange={onChangeCountry}
                   readonly={readonly}
               />
        </VStack>
    )
}