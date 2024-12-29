import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../..//model/services/loginByUsername/loginByUsername";
import {AppDispatch} from "shared/config/types/AppDispatch";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {username, password, isLoading, error} = useSelector(getLoginState);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch])

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({username, password}));

	}, [dispatch, username, password])

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
			<Text title={t("Форма авторизации")}/>
			{error && <Text text={t(error)} theme={TextTheme.ERROR}/>}
					<Input
						autofocus
						placeholder={t("Введите имя")}
						onChange={onChangeUsername}
						className={cls.input}
						type="text"
						value={username}
					/>
					<Input
						placeholder={t("Введите пароль")}
						onChange={onChangePassword}
						className={cls.input}
						type="text"
						value={password}
					/>
					<Button
						onClick={onLoginClick}
						theme={ButtonTheme.OUTLINE}
						className={cls.loginBtn}
						disabled={isLoading}
					>
						{t("Войти")}
					</Button>
        </div>
    );
});