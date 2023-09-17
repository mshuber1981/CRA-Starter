import React from "react";
import PropTypes from "prop-types";
import { useErrorBoundary } from "react-error-boundary";
// Components
import { Button } from "react-bootstrap";

// #region component
const propTypes = { error: PropTypes.object.isRequired };

const AppFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{`${error.name}: ${error.message}`}</pre>
      <Button onClick={resetBoundary}>Reset Error Boundary</Button>
    </main>
  );
};

AppFallback.propTypes = propTypes;
// #endregion

export default AppFallback;
