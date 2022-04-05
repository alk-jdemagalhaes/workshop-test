import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { fetchUserApi } from "./api";

import { fetchUserSaga } from "./saga";
import { initialState, reducer } from "./reducer";
import { FETCH_USER_RECEIVE } from "./actions";

describe("UserSaga", () => {
  beforeEach(() => {
    //expect.hasAssertions();
  });

  it("should populate the user", async () => {
    // Take the template follow it to a tee, it will cover everything you need for this test (and your future ones as long as it's not overly complex !)
    // Cheat sheet : expectsaga => withreducer => provide => assertions (put/hasFinalState)
  });
});
