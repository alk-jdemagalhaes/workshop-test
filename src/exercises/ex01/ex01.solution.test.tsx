import { render } from "@testing-library/react";

import { Ex01 } from "./";

describe("Ex01 : Basic rendering and testing", () => {
  beforeEach(() => {
    //expect.hasAssertions();
  });

  it('should find in the Ex01 Component, the text: "Hello World !"', () => {
    const screen = render(<Ex01 />);

    expect(screen.getByText("Hello World !")).toBeInTheDocument();
  });

  it('should NOT find in the Ex01 Component, the text "This is not showing up !"', () => {
    const screen = render(<Ex01 />);

    expect(
      screen.queryByText("This is not showing up !")
    ).not.toBeInTheDocument();
  });

  it('should find in the Ex01 Component, the button "My bouton"', () => {
    const screen = render(<Ex01 />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it('should NOT find in the Ex01 Component, the a "My link"', () => {
    const screen = render(<Ex01 />);

    expect(screen.queryByRole("a")).not.toBeInTheDocument();
  });

  it('should find in the Ex01 Component, the div with data-testid "Test1"', () => {
    const screen = render(<Ex01 />);

    expect(screen.getByTestId("test1")).toBeInTheDocument();
  });

  it('should NOT find in the Ex01 Component, the div with data-testid "Test2', () => {
    const screen = render(<Ex01 />);

    expect(screen.queryByTestId("test2")).not.toBeInTheDocument();
  });
});
