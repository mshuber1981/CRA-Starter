import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode === "light" ? (state.mode = "dark") : (state.mode = "light");
    },
  },
});

export const { setMode, toggleMode } = appSlice.actions;

export default appSlice.reducer;
