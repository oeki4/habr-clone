import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "shared/config/types/DeepPartial";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {},
) {
  const { route = "/", initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      {/*@ts-ignore*/}
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
