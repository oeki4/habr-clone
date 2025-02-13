import {classNames} from "shared/lib/classNames/classNames";
import {Country} from "../../model/types/country";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ListBox} from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
];

export const CountrySelect = memo((
    {className, value, onChange, readonly}
        : CountrySelectProps) => {
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange])

		return (
			<ListBox
				className={classNames('', {}, [className])}
				onChange={onChangeHandler}
				value={value}
				items={options}
				defaultValue={t('Укажите страну')}
				label={t('Укажите страну')}
				readonly={readonly}
				direction={'top'}
			/>
		)
});