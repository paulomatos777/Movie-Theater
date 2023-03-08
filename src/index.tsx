import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import store from "./store";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./store/sagas";
import movies from "./store/slices/movies";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

const store = configureStore({
  reducer: movies,
  middleware: [thunkMiddleware],
});

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
