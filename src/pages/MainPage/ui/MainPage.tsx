import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {Page} from "widgets/Page/Page";
import {HStack, VStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";

const MainPage = () => {
	const {t} = useTranslation('main');
	return (
		<Page>
			<BugButton/>
			{t("Главная страница")}
			<VStack>
				<ListBox
					defaultValue={'Выберите значение'}
					onChange={(value: string) => {}}
					value={undefined}
					items={[
						{value: '1', content: '123'},
						{value: '2', content: '12'},
						{value: '3', content: '1', disabled: true},
					]}
				/>
				<p>
					122123
				</p>
			</VStack>
		</Page>
	);
};

export default MainPage;