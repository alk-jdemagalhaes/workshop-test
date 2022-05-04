import { render, waitFor } from "@testing-library/react";
import {
  mockComponent,
  mockRouter,
  mockProvider,
  mockProviderWithStore,
} from "./mocks";
import userEvent from "@testing-library/user-event";

import { Ex03 } from "./ex03";

jest.mock("./shrek", () => ({
  ShrekMovie: mockComponent("ShrekMovie"),
}));

describe("Ex03", () => {
  it("should render with a defined state", () => {
    const state = { user: "Syg", likes: 0 };
    const screen = render(mockProvider(state, mockRouter({}, <Ex03 />)));

    expect(screen.getByText("Bonjour Syg")).toBeInTheDocument();
  });

  it("should dispatch an action", async () => {
    const state = { user: "Syg", likes: 0 };
    const [element, store] = mockProviderWithStore(
      state,
      mockRouter({}, <Ex03 />)
    );
    const screen = render(element);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(store.getActions()).toEqual([{ type: "LIKE" }]);
  });

  it("should render with the router and the store", () => {
    const screen = render(mockProvider({}, mockRouter({}, <Ex03 />)));

    expect(screen.getByText("You're currently at : /")).toBeDefined();
  });

  it("should have the shrek movie mocked", () => {
    const screen = render(mockProvider({}, mockRouter({}, <Ex03 />)));

    expect(screen.queryByText("Enjoy Shrek !")).not.toBeInTheDocument();
    expect(screen.getByTestId("ShrekMovie")).toBeInTheDocument();
  });
});
