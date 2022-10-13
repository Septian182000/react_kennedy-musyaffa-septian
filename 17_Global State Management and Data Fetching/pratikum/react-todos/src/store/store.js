import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import reducer from "./todoSlice";

const persistConfig = {
    key: "Kennedy",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore ({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)