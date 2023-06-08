"use client";
import React from "react";
import ReactDOM from "react-dom/client";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./appContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import { store } from "./store";
// https://github.com/bvaughn/react-error-boundary
import { ErrorBoundary } from "react-error-boundary";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Components
import AppFallBack from "./components/AppFallBack";
import App from "./App";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider>
      <ErrorBoundary FallbackComponent={AppFallBack}>
        <App />
      </ErrorBoundary>
    </AppProvider>
  </Provider>
);
