# Jest generic mocks

## jest.mock

`jest.mock` is the basis for mocking modules. It will automatically mock the module you're passing him.

```tsx
jest.mock("./myModule");
```

- And just like that, jest will try to mock as best as possible your module.

## Partial jest.mock

Sometimes you need to be more precise on what you're going to mock. This is where passing a function for `jest.mock` becomes useful :

```tsx
jest.mock("./myModule", () => ({
  myFunction: () => "Something a little better",
}));
```

- Instead of automatically mocking everything inside your module, you will define yourself what will be imported.
- Here, only `myFunction` will be available when doing `import Myfunction from "./myModule";`

## jest.requireActual

Sometimes, we only need to mock a specific target within our component, but keep the rest in place. This is where `jest.requireActual` comes in. It will allows us to fetch the true module, but you can play around it to mock what we need.

```tsx
import { screen, render } from "@testing-library/react";
import { complicatedFunction } from "./myModule";
import { MyComponent } from "./MyComponent";

jest.mock("./myModule", () => ({
  ...jest.requireActual("./myModule"),
  complicatedFunction: jest.fn(),
}));

describe("<MyComponent />", ()A => {
  it("should have the right mocks", async () => {
    render(<MyComponent />);
    expect(complicatedFunction).toHaveBeenCalled();
  });
});
```

- First of all, you need to mock the module and define what exactly you're going to mock.
- Then, use `jest.requireActual("./myModule")` to get a copy of the real module inside your mock,
- Finally, replace the functions you want to spy on by mocks.
