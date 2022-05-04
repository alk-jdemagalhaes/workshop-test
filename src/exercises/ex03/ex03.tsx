import { Provider, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { ShrekMovie } from "./shrek";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { user: "Syg", likes: 0 };

const reducer = (state = initialState, action: any) => {
  if (action.type === "LIKE") {
    return { ...state, likes: state.likes + 1 };
  }
  return state;
};

const store = configureStore({ reducer });

const Ex03Framework = () => {
  return (
    <Provider store={store}>
      <Ex03 />
    </Provider>
  );
};

const Ex03 = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  const likes = useSelector((state: any) => state.likes);
  return (
    <div>
      <div>
        <span>Bonjour {user}</span>
      </div>
      <div>You're currently at : {`${location?.pathname}`}</div>

      <ShrekMovie />
      <div>Like the movie ? Like it !</div>
      <button onClick={() => dispatch({ type: "LIKE" })}>Like !</button>
      <div>Likes: {likes}</div>
    </div>
  );
};

export { Ex03, Ex03Framework };
