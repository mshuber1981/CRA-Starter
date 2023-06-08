import React from "react";
import { useAppContext } from "../appContext";
import { ThemeProvider } from "styled-components";
import { useErrorBoundary } from "react-error-boundary";
// Components
import { Button } from "react-bootstrap";
import GlobalStyles from "./GlobalStyles";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function AppFallBack({ error }) {
  const { theme, setTheme } = useAppContext();
  const { resetBoundary } = useErrorBoundary();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
    },
    [setTheme]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <main className="d-flex flex-column justify-content-center align-items-center vh-100">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{`${error.name}: ${error.message}`}</pre>
        <Button onClick={resetBoundary}>Reset Boundary</Button>
      </main>
    </ThemeProvider>
  );
}
