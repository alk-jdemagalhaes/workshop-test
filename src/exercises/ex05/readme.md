# Exercise 05

## Sagas

Testing saga is a bit more tricky than reducers and action, since we add a lot more to the mix. It still is purely logical however, let's see how we can do this.

## (Almost) Everything with redux-saga-test-plan

We use the redux-saga-test-plan module to test our sagas. This module will add a chainable function where you can fire your saga against a specific reducer or state, and mock the proper calls to populate your saga. It also has the proper assertions within this object.

```tsx
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";

import { fetchDataApi } from "./api";
import { fetchDataSaga } from "./saga";
import { initialState, reducer } from "./reducer";

describe("UserSaga", () => {
  it("should fetch and dispatch our data", async () => {
    const mockDataPayload = "dataPayload";
    const mockResultApi = "OurData";

    await expectSaga(fetchDataSaga, mockDataPayload)
      .withReducer(reducer)
      .provide([
        [call(fetchDataApi, mockDataPayload), mockResultApi][
          (select(selectPagination), { page: 1, pages: 0, limit: 20, total: 0 })
        ],
      ])
      .hasFinalState({
        ...initialState,
        data: "OurData",
      })
      .put({ type: "START_LOADING" })
      .put({ type: "STOP_LOADING" })
      .put({ type: "RECEIVE_DATA", payload: "OurData" })
      .run();
  });
});
```

Let's break this down :

- We start with the `expectSaga` object. The first parameter is our saga and the second our data for this saga. If our saga has no payload, then we don't use the second argument.
- We then populate it with either `withReducer` or `withState`
- - It is very unreliable to use both at the same time.
- - `withReducer` will take your reducer as an argument. It will populate our `expectSaga` object with everything within it, and will allow the methods within it to work. It is the recommended tool to use in our situation.
- - `withState` will take a static state and fire your saga against it. It is sometimes useful to test only what happens during your saga but won't really be useful to test the final state. You should stick to `withReducer`.
- `provide` is what we're going to use to mock the different methods within our saga. Take note of the structure : it takes an array, and within this array, you have to wrap what you want to mock in another array : with the left side on what you're calling, alongside his parameters, and on the right side the mocked return.
- - You will need to mock `call` functions, as well as `select` functions if you're using `withReducer`.
- - The parameters of your mocked call matter ! It will only mock if both the method and his parameters are matching when running our saga.
- We finally have the complete setup to test our saga. Time for assertions ! `hasFinalState` will compare the internal state of what our saga has done to his parameter.
- `put` is something that you use in our saga, and you'll reuse this method to test the `put` within our saga. Any `put` within the chainable object is going to test if you fire a `put` of the same type and payload in our component.
- - You can use also `putResolve` if you use it in your saga.
- - It doesn't have to be in order, but it has to be the same number of put in your saga and in your test.
- - If you need to test if it is in the right order, you have to use the `testSaga` method instead.

Check more documentation here : http://redux-saga-test-plan.jeremyfairbank.com/
