import { combineReducers } from "redux";
import { skateReducer as skate } from "./reducers";
// import {
//     loginReducer as loginData,
//     findReducer as find,
//     logsReducer as logs,
//     reportsReducer as reports,
//     profileReducer as profilePage,
// } from './reducers';

export const rootreducer = combineReducers({
  skate,
});
