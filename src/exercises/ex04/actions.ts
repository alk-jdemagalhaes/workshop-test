import { Action } from "@reduxjs/toolkit";

export interface ActionWithPayload<P = any> extends Action<string> {
  payload?: P;
}

export const INCREASE_COUNTER = "counter/increase";
export const SET_COUNTER = "counter/set";

export const increaseCounter: Action = { type: INCREASE_COUNTER };

export const setcounter = (payload: number): ActionWithPayload => ({
  type: SET_COUNTER,
  payload,
});
