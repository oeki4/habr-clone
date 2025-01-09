import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {FC, memo, ReactNode} from "react";
import {Link, LinkProps} from "react-router";

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
	children?: ReactNode;
	theme?: AppLinkTheme;
}

export const AppLink = memo<AppLinkProps>((props) => {
		const {
			to,
			className,
			children,
			theme = AppLinkTheme.PRIMARY,
			...otherProps
		} = props;
    return (
        <Link
					to={to}
					className={classNames(cls.appLink, {}, [className, cls[theme]])}
					{...otherProps}
				>
					{children}
        </Link>
    );
});