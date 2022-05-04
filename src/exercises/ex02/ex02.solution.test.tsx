import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Ex02 } from "./ex02";

describe("Ex02", () => {
  it("should render the component in itself, not the loading page", async () => {
    const screen = render(<Ex02 />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
  });

  it("should fill in the form and send the input", async () => {
    const mockOnButtonClick = jest.fn();
    const screen = render(<Ex02 onButtonClick={mockOnButtonClick} />);

    await waitFor(() => {
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
    const usernameInput = screen.getByRole("textbox");
    const passwordInput = screen.getByPlaceholderText("Password");
    const button = screen.getByRole("button");

    await userEvent.type(usernameInput, "Syg");
    await userEvent.type(passwordInput, "hunter2");
    await userEvent.click(button);

    expect(usernameInput).toHaveValue("Syg");
    expect(passwordInput).toHaveValue("hunter2");
    expect(mockOnButtonClick).toHaveBeenCalled();
    expect(mockOnButtonClick).toHaveBeenCalledWith({
      name: "Syg",
      password: "hunter2",
    });
  });

  it("should fill in the form, and check if the logged in div shows up", async () => {
    const screen = render(<Ex02 />);

    await waitFor(() => {
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
    const usernameInput = screen.getByRole("textbox");
    const passwordInput = screen.getByPlaceholderText("Password");
    const button = screen.getByRole("button");

    await userEvent.type(usernameInput, "Syg");
    await userEvent.type(passwordInput, "hunter2");
    await userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText("Welcome back Syg")).toBeInTheDocument()
    );
  });
});
