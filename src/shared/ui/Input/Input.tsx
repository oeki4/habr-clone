import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	type?: string;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const isCaretVisible = isFocused && !readonly;

	const onBlur = () => {
		setIsFocused(false);
	}

	const onFocus = () => {
		setIsFocused(true);
	}

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart)
	}

	const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	useEffect(() => {
		if(autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, []);

	const mods: Mods = {
		[cls.readonly]: readonly,
	}

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>
					{`${placeholder}>`}
				</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandle}
					className={cls.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					readOnly={readonly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span className={cls.caret} style={{
						left: `${caretPosition * 7}px`
					}}/>
				)}

			</div>
		</div>
		);
});