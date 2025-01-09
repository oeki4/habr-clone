import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch])

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({username, password}));
		if(result.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	}, [onSuccess, dispatch, username, password])

    return (
		<DynamicModuleLoader
			removeAfterUnmount
			reducers={initialReducers}
		>
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;