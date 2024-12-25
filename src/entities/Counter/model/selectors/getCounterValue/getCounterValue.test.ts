import {MaybeMockedDeep} from "@storybook/test";
import {StateSchema} from "app/providers/StoreProvider";
import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', () => {
	test('should return counter value', () => {
		const state: MaybeMockedDeep<StateSchema> = {
			counter: {value: 10},
		}
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	})
});