export type Mods  = Record<string, boolean | string | undefined>;

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string {

	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className)
	]
		.join(' ');
}

classNames('remove-btn', {hovered: true, selectable: true, red: true}, ['']);