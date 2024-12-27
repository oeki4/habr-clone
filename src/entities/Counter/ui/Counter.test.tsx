import {screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {componentRender} from "shared/config/tests/componentRender/componentRender";
import {userEvent} from "@storybook/test";
import {act} from "react";

describe('Counter', () => {
	test('test render', () => {
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				},
			}
		});
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 10');
	})

	test('increment', async () => {
		const user = userEvent.setup();
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				}
			}
		});
		await act(async () => {
			await user.click(screen.getByTestId('increment-button'))
		})
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 11');
	})

	test('decrement', async () => {
		const user = userEvent.setup();
		componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10,
				}
			}
		});
		await act(async () => {
			await user.click(screen.getByTestId('decrement-button'));
		})
		expect(screen.getByTestId("value-title")).toHaveTextContent('value: 9');
	})
});