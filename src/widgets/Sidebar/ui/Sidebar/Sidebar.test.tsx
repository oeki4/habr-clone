import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {renderWithTranslation} from "shared/config/tests/renderWithTranslation/renderWithTranslation";
import {componentRender} from "shared/config/tests/componentRender/componentRender";

describe('Sidebar', () => {
	test('Test render', () => {
		componentRender(<Sidebar/>);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	})

	test('test toggle', () => {
		componentRender(<Sidebar/>);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	})
});