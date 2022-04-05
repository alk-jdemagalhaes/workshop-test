import { START_LOADING, STOP_LOADING, FETCH_USER_RECEIVE } from "./actions";

const initialState = {
  loading: false,
  user: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case FETCH_USER_RECEIVE:
      return { ...state, user: action.payload };
  }
  return initialState;
};

export { initialState, reducer };
