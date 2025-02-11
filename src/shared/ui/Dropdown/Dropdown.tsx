import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Fragment, ReactNode} from "react";
import {DropdownDirection} from "shared/types/ui";
import {AppLink} from "shared/ui/AppLink/AppLink";

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
	const {className, trigger, items} = props;
	return (
		<Menu  as={'div'} className={classNames(cls.dropdown, {}, [className])}>
			<MenuButton className={cls.btn}>{
				trigger
			}</MenuButton>
			<MenuItems className={cls.menu} anchor="bottom">
				{items.map(item => {
					const content = ({focus}: {focus: boolean}) => (
						<button type={'button'} disabled={item.disabled} onClick={item.onClick} className={classNames(cls.item, {[cls.active]: focus}, [])}>
							{item.content}
						</button>
					)
					if(item.href) {
						return (
							<MenuItem as={AppLink} to={item.href} disabled={item.disabled}>
								{content}
							</MenuItem>
						)
					}
					return (
						<MenuItem as={Fragment} disabled={item.disabled}>
							{content}
					</MenuItem>
				)})}

			</MenuItems>
		</Menu>
	)
}