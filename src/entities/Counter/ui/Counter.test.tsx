import {screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {componentRender} from "shared/config/tests/componentRender/componentRender";
import {userEvent} from "@storybook/test";

describe('Counter', () => {
	test('test render', () => {
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				}
			}
		});
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 10');
	})

	test('increment', () => {
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				}
			}
		});
		userEvent.click(screen.getByTestId('increment-button'))
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 11');
	})

	test('decrement', () => {
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				}
			}
		});
		userEvent.click(screen.getByTestId('decrement-button'));
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 9');
	})
});