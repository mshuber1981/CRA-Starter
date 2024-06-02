// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { createSlice } from "@reduxjs/toolkit";

// #region initial state
const initialState = {
  mode: "light",
};
// #endregion

// #region slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
// #endregion

// state selectors
export const selectMode = (state) => state.app.mode;
// actions
export const { setMode } = appSlice.actions;

export default appSlice.reducer;
