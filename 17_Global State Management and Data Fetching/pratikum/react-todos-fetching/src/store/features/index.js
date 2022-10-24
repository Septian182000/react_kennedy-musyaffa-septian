import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const rootReducers = combineReducers({
  todo: todoSlice,
});

export default rootReducers;