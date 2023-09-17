import React from "react";
// Routing
import { useLocation } from "react-router-dom";
// Components
import Title from "../components/Title";
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
      <Title text={"Route 1 h1 Title"} />
      <br />
      <Title size={"h2"} text={"Route 1 h2 Title"} />
    </section>
  );
};
// #endregion

export default Route1;
