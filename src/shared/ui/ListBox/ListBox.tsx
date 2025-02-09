import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import {Fragment, ReactNode} from 'react';
import cls from './ListBox.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {AnchorPropsWithSelection} from "@headlessui/react/dist/internal/floating";
import {HStack} from "shared/ui/Stack";


export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
	items?: ListBoxItem[];
	className?: string;
	value?: string;
	defaultValue?: string;
	onChange:(value: string) => void;
	readonly?: boolean;
	direction?: AnchorPropsWithSelection;
	label?: string;
}

export const ListBox = (props: ListBoxProps) => {
	const {items, className, onChange, value, defaultValue, readonly, direction = 'bottom', label} = props;

	return (
		<HStack gap={'4'}>
			{label && <span>
					{`${label}>`}
				</span>}
			<HListBox
				disabled={readonly}
				as={'div'}
				value={value}
				onChange={onChange}
			>

				<ListboxButton disabled={readonly} className={cls.trigger}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</ListboxButton>
				<ListboxOptions className={classNames(cls.options, {}, [])} anchor={direction}>
					{items?.map((item) => (
						<ListboxOption as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
							{({focus, selected}) => (
								<li
									className={
										classNames(cls.item,
											{
												[cls.active]: focus,
												[cls.diabled]: item.disabled,
											},
											[])}
								>
									{item.content}
								</li>
							)}
						</ListboxOption>
					))}
				</ListboxOptions>
			</HListBox>
		</HStack>

	)
}