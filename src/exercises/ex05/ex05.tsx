import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { fetchUser } from "./actions";
import { reducer } from "./reducer";
import { userSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(userSaga);

const Ex05Framework = () => {
  return (
    <Provider store={store}>
      <Ex05 />
    </Provider>
  );
};

const Ex05 = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const loading = useSelector((state: any) => state.loading);
  const randomizer = useSelector((state: any) => state.randomizer);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <>
        <div>No user found !</div>
        <button onClick={() => dispatch(fetchUser(147))}>Fetch my user</button>
      </>
    );
  }

  if (!loading) {
    return (
      <div>
        Welcome back {user.firstname} {user.lastname} (ID {user.id})
        <div>Your lucky number today is {randomizer}</div>
      </div>
    );
  }

  return null;
};

export { Ex05, Ex05Framework };
