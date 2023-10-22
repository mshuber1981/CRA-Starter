import React from "react";
import { ThemeProvider } from "styled-components";
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
import AppFallBack from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
// Data
import { navLogo, homeRouteName, navRoutes, socials } from "./data";

// #region component
const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectMode);

  return (
    <ErrorBoundary FallbackComponent={AppFallBack}>
      <ThemeProvider theme={{ name: theme }}>
        <HashRouter>
          <>
            <GlobalStyles />
            <NavBar
              callBack={(theme) => dispatch(setMode(theme))}
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
