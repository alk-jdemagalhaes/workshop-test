# Exercise 01

## Basics of @testing-library/react

Testing library is a containing many utilities for (you guessed it) testing. The goal is to provide a better scoped tests, that fit what an user sees and do. We want tests that are comprehensible, who don't need to change if we refactor the component, that are easily maintainable. React testing library is a good solution for all of that.

## Setting up the library

@testing-library/react only provides utility, we still need a testing framework for that (Jest). Other than that, it's pretty much import and play !

## A basic test

```
import React from "react";
import { screen, render } from "@testing-library/react";

const MyComponent = () => (
    <div>Hello World!</div>
);

describe("<MyComponent />", () => {
    it("Should render and show the component", () => {
        render(<MyComponent />);

        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });
});
```

How do we play with @testing-library/react :

- `screen` is the main framework of the test. It contains all the selectors that we will need to test our component.
- `render` is what we're gonna use to (you guess it) render our component. Anything passed on `render` will be translated to a virtual screen, which we can use with the variable `screen`.
- `getByText` is an exemple of a selector contained in `screen`. Verbose, but effective : it gets the text from the argument.
- `toBeInTheDocument()` is what we're usually going to use on DOM object. It will check if it's within what we rendered with `render`. Note that it's not from the library with from jest-DOM, but we'll use it a lot !

This is pretty much what you're going to need to set up basic tests with @testing-library/react !

## Testing different stuff

In order to test what we need, we use the different selectors that `screen` offers us. See the documentation from @testing-library/react :

https://testing-library.com/docs/queries/about/

## Other shenanigans

`screen.debug()` is useful to see what's going on in your render.

You can get the container with what `render` returns. It can be useful for different purposes, like the `document.querySelector()` (but try to stick with the screen selectors).

`render` also returns the `rerender()` function. It can be useful in some cases.
