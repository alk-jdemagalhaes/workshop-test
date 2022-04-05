import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Ex02 } from "./";

describe("Ex02", () => {
  it("should render the component in itself, not the loading page", async () => {
    const screen = render(<Ex02 />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("My Component")).toBeInTheDocument();
    });
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
  });

  it("should click on the button, and check if the onButtonClick function has been called", async () => {
    const mockOnButtonClick = jest.fn();
    const screen = render(<Ex02 onButtonClick={mockOnButtonClick} />);

    await waitFor(() => {
      expect(screen.getByText("My Component")).toBeInTheDocument();
    });
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(mockOnButtonClick).toHaveBeenCalled();
  });

  it("should write in the input, check if the values changes in the input, and check if my span changes properly", async () => {
    const screen = render(<Ex02 />);

    await waitFor(() => {
      expect(screen.getByText("My Component")).toBeInTheDocument();
    });
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Changed");
    expect(input).toHaveValue("Changed");
    expect(screen.getByText("My name is Changed")).toBeInTheDocument();
  });
});
