import React from "react";
// Routing
import { useLocation } from "react-router-dom";
// Utils
import { updateTitle } from "../util";

// #region component
const Route1 = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    updateTitle(pathname.substring(1));
  }, [pathname]);

  return (
    <section>
      <h2>Route 1</h2>
    </section>
  );
};
// #endregion

export default Route1;
