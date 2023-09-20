import React from "react";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "./appSlice";
// Routing
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallBack from "./old/components/AppFallBack";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
// Data
import { navLogo, homeRouteName, navRoutes, socials } from "./data";

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
            <NavBar
              navLogo={navLogo}
              homeRouteName={homeRouteName}
              navRoutes={navRoutes}
            />
            <main>
              {/* <Container> */}
              <Routes>
                <Route exact path="/" element={<Home />} />
                {navRoutes.map((element) => {
                  return (
                    <Route
                      key={element.id}
                      path={element.route}
                      element={element.page}
                    />
                  );
                })}
                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* </Container> */}
            </main>
            <Footer socials={socials} />
            <BackToTop />
          </>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
// #endregion

export default App;
