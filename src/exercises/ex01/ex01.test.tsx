import { screen, render } from "@testing-library/react";

import { Ex01 } from "./ex01";

describe("Ex01 : Basic rendering and testing", () => {
  beforeEach(() => {
    //expect.hasAssertions();
  });

  it('should find in the Ex01 Component, the text: "Hello World !"', () => {});

  it('should NOT find in the Ex01 Component, the text "This is not showing up !"', () => {});

  it('should find in the Ex01 Component, the <button> "My bouton"', () => {});

  it('should NOT find in the Ex01 Component, the <a> "My link"', () => {});

  it('should find in the Ex01 Component, the <div> with data-testid="Test1"', () => {});

  it('should NOT find in the Ex01 Component, the <div> with data-testid="Test2"', () => {});
});
