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
      .withState({ state: "superState" })
      .provide([
        // the main array, each key of this is a mock
        [call(fetchDataApi, mockDataPayload), mockResultApi], // this array is wrapped inside our "main array"
      ])
      .put({ type: "START_LOADING" })
      .put({ type: "STOP_LOADING" })
      .put({ type: "RECEIVE_DATA", payload: "OurData" })
      .put.like({ action: { type: "RANDOMIZER" } })
      .run();
  });
});
```

Let's break this down :

- We start with the `expectSaga` object. The first parameter is our saga and the second our data for this saga. If our saga has no payload, then we don't use the second argument.
- We then populate it with `withState` if we need specific variables from our redux state to make it work.
- `provide` is what we're going to use to mock the different methods within our saga. Take note of the structure : it takes an array, and within this array, you have to wrap what you want to mock in another array : with the left side on what you're calling, alongside his parameters, and on the right side the mocked return.
- - You will need to mock `call` functions
- - The parameters of your mocked call matter ! It will only mock if both the method and his parameters are matching when running our saga.
- Now that our saga is set up, we use assertions methods. `put` is something that you use in our saga, and you'll reuse this method to test the `put` within our saga. Any `put` within the chainable object is going to test if you fire a `put` of the same type and payload in our component.
- - You can use also `putResolve` if you use it in your saga.
- - It doesn't have to be in order, but it has to be the same number of put in your saga and in your test.
- - `put` can be hard to test if your object has a lot of data in it. Sometimes you only need to check one specific variable. In this case, use `put.like` to assert more precisely.
- finally, use `run` to have your saga be fired. It will return a Promise, await it to run the test.

## Your test should be as iso as possible

`redux-saga-test-plan` gives access to a lot of tools. One of them is the `withReducer` method, alongside the `hasfinalState` method. Those two are super useful to test the path of your sagas from A to Z, but comes at a cost of dependency ! Now, if you change your reducer, your test will fail.

When testing a saga, go for the essential : only test if you send the right data with `put`, with the right variables. If the reducer has been properly tested, then your complete path is still healthy and tested, your test will be iso, and you will gain a good amount of time !

However, maybe sometimes, you will need to test your saga against the reducer (this shouldn't be the case, but it's good to be informed as you may cross paths with this kind of test in our stack). In this case, you can follow a plan like this :

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
        [
          (select(selectPagination),
          { page: 1, pages: 0, limit: 20, total: 0 }),
        ],
      ])
      .hasFinalState({
        ...initialState,
        data: "OurData",
      })
      .run();
  });
});
```

- Use the `withReducer` method to populate your saga with the reducer and its logic.
- Do not use `withReducer` and `withState` together, only one should be used to populate your inital state.
- If you use `withReducer`, you will need to mock the `select` methods with the `provide` method.
- Use the `hasFinalState` method to check the results of your saga against a given state.
- It is a trimmed down version, you still need to have `put` methods and all of the above to have a complete test !

## Avoid the `testSaga` method

`testSaga` is very tricky and overly complicated to use for its benefits. Unless absolutely necessary (you know what you're doing then !), you can, and should, avoid it.

Check more documentation here : http://redux-saga-test-plan.jeremyfairbank.com/
