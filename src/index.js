import React from "react";
import ReactDOM from "react-dom/client";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./appContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import { store } from "./store";
import { pubImagePath, hostUrl } from "./data";
// https://github.com/staylor/react-helmet-async
import { Helmet, HelmetProvider } from "react-helmet-async";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider>
      <HelmetProvider>
        <Helmet>
          {/* Essential META Tags */}
          <meta property="og:title" content="My CRA Starter Template" />
          {/* https://ogp.me/#type_website */}
          <meta property="og:type" content="website" />
          {pubImagePath ? (
            <meta property="og:image" content={pubImagePath} />
          ) : null}
          {pubImagePath ? <meta property="og:url" content={hostUrl} /> : null}
          <meta name="twitter:card" content="summary_large_image" />
          {/* Non-Essential, But Recommended */}
          <meta
            property="og:description"
            content="My starter template for Create React App projects."
          />
          <meta property="og:site_name" content="CRA Starter" />
          <meta name="twitter:image:alt" content="Create React App" />
        </Helmet>
        <App />
      </HelmetProvider>
    </AppProvider>
  </Provider>
);
