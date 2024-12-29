import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {buildBabelLoader} from "../build/loaders/buildBabelLoader";

export default ({config}: {config: webpack.Configuration}) => {

	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}
	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');

	config.module.rules.push(buildBabelLoader())
	config.module.rules = config.module.rules.map((rule) => {
		if(/svg/.test(rule.test as string)) {
			return {...rule, exclude: /\.svg$/i};
		}
		return rule;
	})
	config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	});
	config.module.rules.push(buildCssLoader(true))

	config.plugins.push(new webpack.DefinePlugin({
		__IS_DEV__: true,
	}))

	return config;
}