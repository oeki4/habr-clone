import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "../../types/article";

export const fetchArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>>(
	'article/fetchArticleById',
	async (
		articleId,
		{extra, rejectWithValue}
	) => {
		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: 'user',
				}
			});

			if(!response.data) {
				throw new Error('No data!');
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}

	}
)