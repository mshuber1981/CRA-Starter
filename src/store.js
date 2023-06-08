// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import homeReducer from "./pages/homeSlice";

export const store = configureStore(
  {
    reducer: {
      home: homeReducer,
    },
  },
  // https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
