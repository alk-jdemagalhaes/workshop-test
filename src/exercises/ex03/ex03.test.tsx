import { render } from "@testing-library/react";
import {
  mockComponent,
  mockRouter,
  mockProvider,
  mockProviderWithStore,
} from "./mocks";
import userEvent from "@testing-library/user-event";

import { Ex03 } from "./";

describe("Ex03", () => {
  beforeEach(() => {
    //expect.hasAssertions();
  });

  it("should render with a defined state", () => {
    /* Define the state and name your user,
     *then check if the span using it renders properly
     */
  });

  it("should dispatch an action", () => {
    /* Make sure your component is wrapped in the proper mock,
     *  Then fire the button and check if the store has registered the action
     */
  });

  it("should render with the router and the store", () => {
    /* Don't forget that the component is still connected !
     * Mock the router, then check if the route is properly showing up (it should be "/")
     */
  });

  it("should have the superbigcomponent mocked", () => {
    /* Don't forget that the component is still conncted !
     * Mock the superbigcomponent, then check if his text is not showing up,
     * and instead the mocked component appears
     */
  });
});
