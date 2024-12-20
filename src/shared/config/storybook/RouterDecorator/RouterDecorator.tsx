import {StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router";

export const RouterDecorator = (Story: StoryFn) => (
	<BrowserRouter>
		<Story/>
	</BrowserRouter>
)