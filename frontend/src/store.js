import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/reducers";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initalState = {};

const middleware = [thunk];

export default createStore(
  allReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
