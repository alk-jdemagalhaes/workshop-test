# Exercise 02

## Async stuff, input stuff

One of the big strength of @testing-library/react is to have tests that are intuitive to read if we have async components, or components with inputs, thanks to 2 methods : `waitFor` and `fireEvent`.

## WaitFor

If you have a component that's async (any loading will do !), you can use the `waitFor` method to (you guessed it) wait for something to render.

```
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";

const MyComponent = () => (
    const loading = <Stuff that involves loading with in, say, 750ms>
    <div>{loading ? "Loading..." : Hello World!"</div>
);

describe("<MyComponent />", () => {
    it("Should render and show the component, after loading", () => {
        render(<MyComponent />);

        waitFor(() =>
            expect(screen.getByText('Hello World!')).toBeInTheDocument();
        );
    });
});
```

- Import `waitFor` from @testing-library/react,
- Put any `expect` requiring async loading within the `waitFor` callback,
- The tests are linear, which means any test after the `waitFor` are going to be with after any async loading !
- See the doc : https://testing-library.com/docs/dom-testing-library/api-async/#waitfor

## FireEvent

If you have a component requiring an input from an user, you can use the `fireEvent` method, imported from the library. It will allow you to click, type, whichever input you target.

```
import React from "react";
import { screen, fireEvent } from "@testing-library/react"

const MyComponent = () => {(
    const [name, setName] = useState("Default");
    const [displayName, setDisplayName] = useState(false);

    return (
        <div>
            {displayName && <span>{name}</span>}
            <input type="text" onChange={(e) => setName(e.target.value) />
            <button onClick={() => setName(true)}>Show!</button>
        </div>
    );
};

describe('<MyComponent />', () => {
    it('should display the name, and change it', () => {
        render(<MyComponent />);

        const button = screen.getByRole('button');
        const input = screen.getByRole('textbox');
        fireEvent.click(button);
        expect(screen.getByText("Default")).toBeInTheDocument();
        fireEvent.change(input, { target: { value: "MyName" }}));
        expect(screen.getByText("MyName")).toBeIntheDocument();
    }
});
```

- Here, we can see that we need to target the right DOM element with our `screen` selector, then use an action with `fireEvent`
- `click` simply clicks on the DOM element, while `change` needs a little more precision for it to work, just like an `onChange` method
- See the doc : https://testing-library.com/docs/dom-testing-library/api-events/
