import React from "react";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "./appSlice";
// Routing
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Route1 from "./pages/Route1";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallBack from "./old/components/AppFallBack";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Data
import { navLogo } from "./data";

// #region constants
const navLinks = {
  routes: [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Route 1", route: "/Route1" },
  ],
};
// #endregion

// #region functions
const getStoredTheme = () => localStorage.getItem("theme");
const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
// #endregion

// #region component
const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectMode);

  React.useEffect(() => {
    dispatch(setMode(getPreferredTheme()));
  }, [dispatch]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        dispatch(setMode(getPreferredTheme()));
      }
    });

  return (
    <ErrorBoundary FallbackComponent={AppFallBack}>
      <ThemeProvider theme={{ name: theme }}>
        <HashRouter>
          <>
            <GlobalStyles />
            <NavBar navLinks={navLinks} navLogo={navLogo} />
            <main>
              <Container>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Route1" element={<Route1 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Container>
            </main>
            <Footer />
          </>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
// #endregion

export default App;
