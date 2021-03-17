import { createStore } from "redux";
import reducers from "./_reducers";

export const store = createStore(reducers);
