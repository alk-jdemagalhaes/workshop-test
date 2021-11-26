import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Superbigcomponent } from "./superbigcomponent";

const Ex03Framework = () => {
  return (
    <Provider store={createStore((state = { user: "" }, action) => {})}>
      <BrowserRouter>
        <Ex03 />
      </BrowserRouter>
    </Provider>
  );
};

const Ex03 = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      <Superbigcomponent />
      <span>Bonjour {user}</span>
      <span>Router is : {`${location?.pathname}`}</span>
      <button onClick={() => dispatch({ type: "DISPATCHING" })}>
        Click me !
      </button>
    </div>
  );
};

export default Ex03;
