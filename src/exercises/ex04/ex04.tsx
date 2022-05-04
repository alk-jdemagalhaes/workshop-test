import { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { increaseCounter, setcounter } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "./reducer";

const store = configureStore({ reducer });

const Ex04Framework = () => {
  return (
    <Provider store={store}>
      <Ex04 />
    </Provider>
  );
};

const Ex04 = () => {
  const [number, setNumber] = useState(42);
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increaseCounter)}>
        Increase Counter
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(setcounter(number));
            setNumber(Math.round(Math.random() * 101));
          }}
        >
          Set counter to : {number}
        </button>
      </div>
    </>
  );
};

export { Ex04, Ex04Framework };
