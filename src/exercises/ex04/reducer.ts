import { SET_COUNTER, INCREASE_COUNTER } from "./actions";

const initialState = {
  counter: 10,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case SET_COUNTER:
      return { ...state, counter: action.payload };
  }
  return initialState;
};

export { initialState, reducer };
