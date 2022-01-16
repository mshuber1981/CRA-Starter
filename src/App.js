import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// https://v5.reactrouter.com/web/guides/scroll-restoration
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
// Pages
import Home from "./pages/Home";

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
  const [theme, setTheme] = useState("light");

  useEffect(() => (darkMode ? setTheme("dark") : setTheme("light")), []);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
