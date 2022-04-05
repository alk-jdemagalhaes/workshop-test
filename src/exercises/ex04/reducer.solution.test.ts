import { reducer } from "./reducer";
import { increaseCounter, setcounter } from "./actions";

describe("Ex04Reducer", () => {
  it("should increase the counter", () => {
    const action = increaseCounter;
    const state = { counter: 10 };

    const result: any = reducer(state, action);

    expect(result.counter).toBe(11);
  });

  it("should set the counter", () => {
    const action = setcounter(42);
    const state = { counter: 10 };

    const result: any = reducer(state, action);

    expect(result.counter).toBe(42);
  });
});
