import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const { t } = useTranslation();

	 const [isAuthModal, setIsAuthModal] = useState(false);

	 const onToggleModal = useCallback(() => {
		 	setIsAuthModal((prev) => !prev);
	 }, [])

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal} className={cls.links}>
				{ t("Войти") }
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Auth
			</Modal>
		</div>
	);
};

