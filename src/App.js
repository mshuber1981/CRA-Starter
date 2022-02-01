import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Data
import { links } from "./data";
// Components
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import Route1Example from "./pages/Route1Example";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "var(--dark)",
    background: "var(--light)",
  },
  dark: {
    name: "dark",
    color: "var(--light)",
    background: "var(--dark)",
  },
};

function App() {
  const { setDark, setLight, theme } = useGlobalContext();
  // https://stackoverflow.com/questions/56240067/accessing-context-from-useeffect
  const setDarkTheme = useRef(setDark);
  const setLightTheme = useRef(setLight);

  useEffect(
    () => (darkMode ? setDarkTheme.current() : setLightTheme.current()),
    []
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setDarkTheme.current() : setLightTheme.current()
    );

  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Routes>
          <Route
            exact
            path={links[0].route}
            element={<Home home={links[0]} />}
          />
          <Route
            path={links[1].route}
            element={<Route1Example route1={links[1]} />}
          />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
