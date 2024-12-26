import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {Counter} from "entities/Counter";

const MainPage = () => {
	const {t} = useTranslation('main');
	return (
		<div>
			<BugButton/>
			{t("Главная страница")}
		</div>
	);
};

export default MainPage;