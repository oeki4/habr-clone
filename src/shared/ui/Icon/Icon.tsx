import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import {FC, memo, SVGProps} from "react";

interface IconProps {
	className?: string;
	Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({className, Svg}: IconProps) => {

	return (
		<Svg className={classNames(cls.icon, {}, [className])}/>
	);
});