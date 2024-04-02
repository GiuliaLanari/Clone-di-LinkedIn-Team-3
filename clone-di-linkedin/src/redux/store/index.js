import userReducer from "../reducers";

import {
  configureStore,
  //  combineReducers
} from "@reduxjs/toolkit";

// const combinedReducers = combineReducers({});

const store = configureStore({
  reducer: userReducer,
});
export default store;
