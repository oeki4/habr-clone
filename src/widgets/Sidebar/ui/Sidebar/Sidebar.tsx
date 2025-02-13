import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {memo, useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";
import {VStack} from "shared/ui/Stack/VStack/VStack";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
		const [collapsed, setCollapsed] = useState(false);

		const sidebarItems = useSelector(getSidebarItems);

		const onToggle = () => {
			setCollapsed(prev => !prev);
		}

    return (
        <aside data-testid='sidebar' className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
					<Button
						data-testid='sidebar-toggle'
						className={cls.collapsedBtn}
						onClick={onToggle}
						theme={ButtonTheme.BACKGROUND_INVERTED}
						square
						size={ButtonSize.L}
					>
						{collapsed ? '>' : '<'}
					</Button>
					<VStack role={'navigation'} gap={'8'} className={cls.items}>
						{
							sidebarItems.map((item) => (
								<SidebarItem
									item={item}
									collapsed={collapsed}
									key={item.path}
								/>
							))
						}
					</VStack>
					<div className={cls.switchers}>
					<ThemeSwitcher/>
						<LangSwitcher short={collapsed} className={cls.lang}/>
					</div>
				</aside>
		);
});