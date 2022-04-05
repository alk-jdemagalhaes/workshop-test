import { Action } from "@reduxjs/toolkit";

export interface ActionWithPayload<P = any> extends Action<string> {
  payload?: P;
}

export const FETCH_USER = "user/fetch";
export const FETCH_USER_RECEIVE = "user/fetch/receive";

export const START_LOADING = "loading/start";
export const STOP_LOADING = "loading/stop";

export const fetchUser = (id: number): ActionWithPayload => ({
  type: FETCH_USER,
  payload: id,
});

export const fetchUserReceive = (user: any): ActionWithPayload => ({
  type: FETCH_USER_RECEIVE,
  payload: user,
});

export const startLoading: Action = { type: START_LOADING };
export const stopLoading: Action = { type: STOP_LOADING };
