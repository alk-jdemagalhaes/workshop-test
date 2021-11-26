import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";

import Ex02 from "./";

describe("Ex02", () => {
  beforeEach(() => {
    expect.hasAssertions();
  });

  it("should check if the component is loaded", async () => {
    /*  The component takes time to load !
     *  Check if he's loading, then wait for his loading.
     *  Once he's loaded, check if any of the thing our component has is present.
     */
  });

  it("should click on the button, and check if the onButtonClick function has been called", async () => {
    /* Don't forget, the component takes times to load !
     * Once he's loaded, check if the onButtonClick is being called.
     */
  });

  it("should write in the input, check if the values changes in the input, and check if my span changes properly", async () => {
    /* Don't forget, the component takes times to load !
     * Once he's loaded, check if changing the value in the input changes the span using the input value.
     */
  });
});
