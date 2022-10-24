import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/index";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export {store}