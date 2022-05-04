import {
  START_LOADING,
  STOP_LOADING,
  FETCH_USER_RECEIVE,
  RANDOMIZER,
} from "./actions";

const initialState = {
  loading: false,
  user: null,
  randomizer: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, loading: true };
    }
    case STOP_LOADING:
      return { ...state, loading: false };
    case FETCH_USER_RECEIVE:
      return { ...state, user: action.payload };
    case RANDOMIZER:
      return { ...state, randomizer: Math.random() };
  }
  return initialState;
};

export { initialState, reducer };
