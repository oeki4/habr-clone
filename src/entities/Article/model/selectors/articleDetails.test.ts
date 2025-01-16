import {StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "shared/config/types/DeepPartial";
import {expect} from "@storybook/test";
import {getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading} from "./articleDetails";

describe('getArticleData test', () => {
	test('should return value', () => {
		const data = {
				id: '1',
				title: 'Title',
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		}

		expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
	})
})

describe('getArticleError test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: 'Some error'
			},
		}

		expect(getArticleDetailsError(state as StateSchema)).toEqual('Some error')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
	})
})

describe('getArticleIsLoading test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true
			},
		}

		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
	})
})