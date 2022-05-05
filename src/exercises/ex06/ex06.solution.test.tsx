import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rollTheDice } from "./dice";

import { Ex06 } from "./ex06";

jest.mock("./lucky-module", () => ({
  ...jest.requireActual("./lucky-module"),
  rollTheDice: jest.fn(() => 147),
}));

describe("<Ex06 />", () => {
  it("should be able to roll stuff !", async () => {
    render(<Ex06 />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("You rolled a 147 !")).toBeInTheDocument();
    expect(rollTheDice).toHaveBeenCalled();
  });
});
