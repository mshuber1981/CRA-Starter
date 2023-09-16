import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: null,
  isExpanded: false,
};

const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
const setTheme = (theme) => {
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    closeExpanded: (state) => {
      state.isExpanded = false;
    },
    toggleExpanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      setTheme(state.mode);
    },
    toggleMode: (state) => {
      state.mode === "light" ? (state.mode = "dark") : (state.mode = "light");
      setTheme(state.mode);
      setStoredTheme(state.mode);
    },
  },
});

export const selectMode = (state) => state.app.mode;

export const selectIsExpanded = (state) => state.app.isExpanded;

export const { closeExpanded, setMode, toggleMode, toggleExpanded } =
  appSlice.actions;

export default appSlice.reducer;
