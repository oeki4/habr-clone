declare module '*.scss' {
	interface IClassName {
		[className: string]: string;
	}

	const classNames: IClassName;
	export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg"
declare module "*.svg" {
	import React from "react";
	const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';