import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import movies from "./movies";

const reducers = (history: History) =>
  combineReducers({
    movies,
    router: connectRouter(history),
  });

export default reducers;
