import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import { Loading } from "./components/globalStyledComponents";
import { Container } from "react-bootstrap";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
// Pages
import Home from "./pages/Home";
import Route1 from "./pages/Route1";
import NotFound from "./pages/NotFound";

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
const navLinks = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Route 1",
    route: "/Route1",
  },
];

export default function App() {
  const { theme, setTheme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
      dispatch(fetchGitHubInfo());
    },
    [setTheme, dispatch]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  if (isLoading) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <main>
          <Container className="d-flex vh-100 align-items-center">
            <Loading />
          </Container>
        </main>
      </ThemeProvider>
    );
  } else if (error) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <main>
          <Container className="d-flex vh-100 align-items-center justify-content-center">
            <h2>{error}</h2>
          </Container>
        </main>
      </ThemeProvider>
    );
  } else {
    return (
      <HashRouter>
        <ScrollToTop />
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          <NavBar navLinks={navLinks} />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Route1" element={<Route1 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
