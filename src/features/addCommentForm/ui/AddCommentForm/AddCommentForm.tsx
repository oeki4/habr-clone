import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import {memo, useCallback} from "react";
import {Input} from "shared/ui/Input/Input";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
	getAddCommentFormError,
	getAddCommentFormText
} from "../../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slice/addCommentFormSlice";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({className, onSendComment}: AddCommentFormProps) => {

	const {t} = useTranslation();
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value))
	}, [dispatch]);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	}, [text])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.addCommentForm, {}, [className])}>
				<Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t("Введите текст комментария")}/>
				<Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t("Отправить")}</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;