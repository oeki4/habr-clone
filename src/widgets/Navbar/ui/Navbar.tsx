import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {memo, useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Avatar} from "shared/ui/Avatar/Avatar";

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch])

	if(authData) {
		return (
			<header className={classNames(cls.navbar, {}, [className])}>
				<Text
					theme={TextTheme.INVERTED}
					className={cls.appName}
					title={'Habr clone'}
				/>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.article_create}
					className={cls.createBtn}
				>
					{t("Создать статью")}
				</AppLink>
				<Dropdown
					className={cls.dropdown}
					items={[
						{
							content: t('Профиль пользователя'),
							href: RoutePath.profile + authData.id,
						},
						{
							content: t('Выйти'),
							onClick: onLogout,
						},
					]}
					trigger={<Avatar size={30} src={authData.avatar}/>}/>
				{isAuthModal &&
					<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
				}
			</header>
		)
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onShowModal}
				className={cls.links}>
				{t("Войти")}
			</Button>
			{isAuthModal &&
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			}
		</div>
	);
});

