# Exercise 03

## Our mocks against React Router, Redux, and large components

One of the complexity in testing is making sure we have the right state and location on our app. We are using simple mocks to (you guessed it) mock what we need for our test. As long as you have the right parameters, the rest of the Redux state won't matter. If it becomes too convoluted, you might need to scope or mock components further. Note that those are utilities within our front-productstream and not from `@testing-library/react`.

## Redux and defined state

We use our utility `mockProvider` to render a component with a built-in `<Provider />`. That allows us to just add our state in, and you get your component connected without anything else needed.

```tsx
import React from "react";
import { screen } from "@testing-library/react";
import { mockProvider } from "utils/tests/mocks";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const user = useSelector((state) => state.user);
  return <div>{user}</div>;
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

```tsx
import React from "react";
import { screen } from "@testing-library/react";
import { mockProvider } from "utils/tests/mocks";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";

const MyComponent = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({ type: "DISPATCHING" })}>
      Click me !
    </button>
  );
};

describe("<MyComponent />", () => {
  it("should show the username", () => {
    const [connectedComponent, store] = mockProviderwithStore(
      state,
      <MyComponent />
    );
    render(connectedComponent);

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(store.getActions()).toEqual([{ type: "DISPATCHING" }]);
  });
});
```

- We start like `mockProvider`, but it returns our element alongside the store,
- We can render, test and fire events, our component and the store will get updated,
- We can use the store methods to test what we want, for example here `getActions` to see what we have called.

## Mocking React Router

We sometimes have to mock React Router to check if we have the right location, or other shenanigans.

```tsx
import React from "react";
import { useLocation } from "react-router";
import { mockRouter } from "utils/tests/mocks";

const MyComponent = () => {
  const location = useLocation();
  return <div>{location?.pathname}</div>;
};

describe("<MyComponent />", () => {
  it("should show the location from react-redux", () => {
    const routedComponent = mockRouter({}, <MyComponent />);
    render(routedComponent);

    expect(screen.getByText("/")).toBeInTheDocument();
  });
});
```

- Just like `mockProvider`, we slot `mockProvider` alongside our component.
- Render it just like normal. We got `location` and all router functions populated !
- If you have some weird problems with `mockRouter`, try to wrap your component inside a `<Route />` component. This will ensure your component matches perfectly what should be in the stack.

## Mocking large components

We have many very complex components requiring a lot of dependencies, sometimes we need to cut those to just make sure we have what we need. We can mock those.

```tsx
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

## Clearing mocks

One thing important to note when you'll use mocks within Jest, is that you'll need to clear them from time to time, especially if you use them in differents parts of your test. Indeed, they are persistent. For example :

```tsx
const mockedFunc = jest.fn();

describe("SimpleTest", () => {
  it("should be called one time with this param", () => {
    mockedFunc(123);
    expect(mockedFunc).toHaveBeenCalledTimes(1);
    expect(mockedFunc).toHaveBeenCalledWith(123);
  });

  it("should be called one time with this other param", () => {
    expect(mockedFunc).toHaveBeenCalledWith(123); // Oops, it works ! That's because the code has been run upwards and kept the data.
    mockedFunc(456);
    expect(mockedFunc).toHaveBeenCalledTimes(1);
    expect(mockedFunc).toHaveBeenCalledWith(456);
  });
});
```

You'll get an error. You can use the method `.mockClear()` on your mocked function to clear it. We have an utility `clearMocks` in the front-productstream that will take all mocks and clear them.

```tsx
import { clearMocks } from "utils/tests/mocks";

const mockedFunc = jest.fn();

describe("SimpleTest", () => {
  afterEach(() => {
    clearMocks(mockedFunc);
  });

  it("should be called one time with this param", () => {
    mockedFunc(123);
    expect(mockedFunc).toHaveBeenCalledTimes(1);
    expect(mockedFunc).toHaveBeenCalledWith(123);
  });

  it("should be called one time with this other param", () => {
    expect(mockedFunc).toHaveBeenCalledWith(123); // This test will fail because it has been cleared after the first test has been run.
    mockedFunc(456);
    expect(mockedFunc).toHaveBeenCalledTimes(1);
    expect(mockedFunc).toHaveBeenCalledWith(456);
  });
});
```
