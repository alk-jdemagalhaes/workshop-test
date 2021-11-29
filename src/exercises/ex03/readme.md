# Exercise 03

## Our mocks against React Router, Redux, and large components

One of the complexity in testing is making sure we have the right state and location on our app. We are using simple mocks to (you guessed it) mock what we need for our test. As long as you have the right parameters, the rest of the Redux state won't matter. If it becomes too convoluted, you might need to scope or mock components further. Note that those are utilities within our front-productstream and not from @testing-library/react.

## Redux and defined state

We use our utility `mockProvider` to render a component with a built-in `<Provider />`. That allows us to just add our state in, and you get your component connected without anything else needed.

```
import React from "react";
import { screen } from "@testing-library/react";
import { mockProvider } from "utils/tests/mocks";
import { useSelector } from "react-redux";

const MyComponent = () => {
    const user = useSelector(state => state.user);
    return (<div>{user}</div>);
};

describe("<MyComponent />", () => {
    it("should show the username", () => {
        const state = { user: "admin" };
        const connectedComponent = mockProvider(state, <MyComponent />);
        render(connectedComponent);

        expect(screen.getByText("admin")).toBeInTheDocument();
    });
});
```

- We start by defining the state that we need. Here, we need the user.
- Then, we create our connected component by slotting our state and the component together in the `mockProvider`
- It returns a connected component. All we need now it to render it !

## Redux and dispatching actions

We use our utility `mockProviderWithStore` that allows us to extract the store and use it to test what actions we have dispatched.

```
import React from "react";
import { screen } from "@testing-library/react";
import { mockProvider } from "utils/tests/mocks";
import { useDispatch } from "react-redux";

const MyComponent = () => {
    const dispatch = useDispatch();

    return (
      <button onClick={() => dispatch({ type: "DISPATCHING" })}>
        Click me !
      </button><button onClick={() => dispatch({}></button>
    );
};

describe("<MyComponent />", () => {
    it("should show the username", () => {
        const [connectedComponent, store] = mockProviderwithStore(state, <MyComponent />);
        render(connectedComponent);

        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(store.getActions()).toEqual([{ type: "DISPATCHING" }]);
    });
});
```

- We start like `mockProvider`, but it returns our element alongside the store,
- We can render, test and fire events, our component and the store will get updated,
- We can use the store methods to test what we want, for example here `getActions` to see what we have called.

## Mocking React Router

We sometimes have to mock React Router to check if we have the right location, or other shenanigans.

```
import React from "react";
import { useLocation } from "react-router";
import { mockRouter } from "utils/tests/mocks";

const MyComponent = () => {
    const location = useLocation();
    return (
        <div>{location?.pathname}</div>
    );
};

describe('<MyComponent />', () => {
   it('should show the location from react-redux', () => {
        const routedComponent = mockRouter({}, <MyComponent />);
        render(routedComponent);

        expect(screen.getByText("/")).toBeInTheDocument();
   });
});
```

- Just like `mockProvider`, we slot `mockProvider` alongside our component.
- Render it just like normal. We got `location` and all router functions populated !

## Mocking large components

We have many very complex components requiring a lot of dependencies, sometimes we need to cut those to just make sure we have what we need. We can mock those.

```
import React from "react";
import { screen } from "@testing-library/react";
import { mockComponent } from "utils/tests/mock";
import { LargeAndOverlyComplexComponent } from "./LargeAndOverlyComplexComponent";

const MyComponent = () => (<LargeAndOverlyComplexComponent />);

jest.mock(("./LargeAndOverlyComplexComponent", () => ({
    LargeAndOverlyComplexComponent: mockComponent("mocked-test-id")
});

describe("<MyComponent />", () => {
    it("should show the mocked component and not the big one", () => ({
        render(<MyComponent />);
        expect(screen.getByTestId("mocked-test-id")).toBeInTheDocument();
    });
});
```

- Here, we start by using `jest.mock` to mock our component. This is where we use `mockComponent`.
- `mockComponent` will return an empty component, with an attribute `data-test-id` according to the value sent.
- We can then use `screen.getByTestId()` to verify that it has been mocked correctly.
- No more big component, instead a light one with an ID to test it !
