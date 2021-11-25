import React from "react";
import { render } from "@testing-library/react";

import Ex01 from "./";

describe("Ex01 : Basic rendering and testing", () => {
  it('should find in the Ex01 Component, the text: "Hello World !"', () => {
    const screen = render(<Ex01 />);
  });

  it('should NOT find in the Ex01 Component, the text "This is not showing up !"', () => {
    const screen = render(<Ex01 />);
  });

  it('should find in the Ex01 Component, the <button> "My bouton"', () => {
    const screen = render(<Ex01 />);
  });

  it('should NOT find in the Ex01 Component, the <a> "My link"', () => {
    const screen = render(<Ex01 />);
  });

  it('should find in the Ex01 Component, the <div> with data-testid="Test1"', () => {
    const screen = render(<Ex01 />);
  });

  it('should NOT find in the Ex01 Component, the <div> with data-testid="Test2', () => {
    const screen = render(<Ex01 />);
  });
});
