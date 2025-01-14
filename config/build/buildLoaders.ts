import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const typescriptLoader = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const cssLoader = buildCssLoader(isDev);

	const babelLoader = buildBabelLoader(isDev);

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	]
}