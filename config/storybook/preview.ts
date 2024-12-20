import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
	decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
