import { compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createStore } from "@reduxjs/toolkit";
import history from "../services/history";
import slices from "./slices";
import sagas from "./sagas";

const middlewares = [routerMiddleware(history)];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const rootReducer = slices(history);

export type StoreState = ReturnType<typeof rootReducer>;

const store: Store<StoreState> = createStore(rootReducer, undefined, composer);

sagaMiddleware.run(sagas);

export default store;
