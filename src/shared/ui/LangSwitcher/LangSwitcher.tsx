import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
		short?: boolean;
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={toggle}>{t(short ? "Короткий язык" : "Язык")}
		</Button>
	);
};