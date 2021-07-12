import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootreducer } from "./rootReducer";

export const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);
