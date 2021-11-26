import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  mockComponent,
  mockRouter,
  mockProvider,
  mockProviderWithStore,
} from "./mocks";

import Ex03 from "./";

jest.mock("./superbigcomponent", () => ({
  Superbigcomponent: mockComponent("SuperBigMocked"),
}));

describe("Ex03", () => {
  it("should render with a defined state", () => {
    const state = { user: "admin" };
    const screen = render(mockProvider(state, mockRouter({}, <Ex03 />)));

    expect(screen.getByText("Bonjour admin")).toBeInTheDocument();
  });

  it("should dispatch an action", () => {
    const state = { user: "admin" };
    const [element, store] = mockProviderWithStore(
      state,
      mockRouter({}, <Ex03 />)
    );
    const screen = render(element);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(store.getActions()).toEqual([{ type: "DISPATCHING" }]);
  });

  it("should render with the router and the store", () => {
    const screen = render(mockProvider({}, mockRouter({}, <Ex03 />)));

    expect(screen.getByText("Router is : /")).toBeDefined();
  });

  it("should have the superbigcomponent mocked", () => {
    const screen = render(mockProvider({}, mockRouter({}, <Ex03 />)));

    expect(
      screen.queryByText("Im super big ! Dont render me!")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("SuperBigMocked")).toBeInTheDocument();
  });
});
