import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "./appSlice";
// Router
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallBack from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
// Config
import { navLogo, homeRouteName, navRoutes, socials } from "./config";
// Util
import { getStoredTheme, getPreferredTheme, setTheme } from "./util";

// #region component
const App = () => {
  const theme = useSelector(selectMode);
  const dispatch = useDispatch();

  const setThemes = React.useCallback(
    (theme) => {
      if (theme) {
        dispatch(setMode(theme));
        setTheme(theme);
      } else {
        dispatch(setMode(getPreferredTheme()));
        setTheme(getPreferredTheme());
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    setThemes();
  }, [setThemes]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setThemes();
      }
    });

  return (
    <ErrorBoundary FallbackComponent={AppFallBack}>
      <ThemeProvider theme={{ name: theme }}>
        <HashRouter>
          <>
            <GlobalStyles />
            <NavBar
              callBack={(theme) => setThemes(theme)}
              homRouteName={homeRouteName}
              logo={navLogo}
              routes={navRoutes}
            />
            <main>
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
