// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import { routerMiddleware } from "connected-react-router";
// import history from "../services/history";
// // import rootSaga from "./sagas";
// import sagas from "./sagas";
// import slices from "./slices";
// // import rootReducer from "./rootReducer";
// // import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const router = routerMiddleware(history);

// const middlewares = [router, sagaMiddleware];

// const rootReducer = slices(history);

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middlewares),
// });

// sagaMiddleware.run(sagas);

// export default store;

import { compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { configureStore, createStore } from "@reduxjs/toolkit";
import history from "../services/history";
import slices from "./slices";
import sagas from "./sagas";

const middlewares = [routerMiddleware(history)];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? // eslint-disable-next-line no-console
      compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const rootReducer = slices(history);

export type StoreState = ReturnType<typeof rootReducer>;

// const store: Store<StoreState> = createStore(rootReducer, undefined, composer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(sagas);

export default store;
