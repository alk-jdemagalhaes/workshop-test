import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { fetchUserApi } from "./api";
import { fetchUserSaga } from "./saga";
import { FETCH_USER_RECEIVE } from "./actions";

describe("UserSaga", () => {
  it("should populate the user", async () => {
    const mockResultApi = {
      user: { firstname: "Test", lastname: "Name", id: 123 },
    };

    await expectSaga(fetchUserSaga, { payload: 123 })
      .provide([[call(fetchUserApi, 123), mockResultApi]])
      .put({ type: "loading/stop" })
      .put({ type: "loading/start" })
      .put({
        type: FETCH_USER_RECEIVE,
        payload: { firstname: "Test", lastname: "Name", id: 123 },
      })
      .put.like({ action: { type: "RANDOMIZER" } })
      .run();
  });
});
