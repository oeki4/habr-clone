import Counter from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>
				Главная
			</Link>
			<Link to={'/about'}>
				О сайте
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync/>}/>
					<Route path={'/'} element={<MainPageAsync/>} />
				</Routes>
			</Suspense>
			<Counter/>
		</div>
	);
};

export default App;