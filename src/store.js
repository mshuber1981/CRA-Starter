// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import appReducer from "./appSlice";
// API
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
