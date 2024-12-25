import {getCounter} from "./getCounter";
import {StateSchema} from "app/providers/StoreProvider";
import {MaybeMockedDeep} from "@storybook/test";

describe('getCounter()', () => {
	test('should return counter value', () => {
		const state: MaybeMockedDeep<StateSchema> = {
			counter: {value: 10},
		}
		expect(getCounter(state as StateSchema)).toEqual({value: 10})
	})
})