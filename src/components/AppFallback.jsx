import React from "react";
import PropTypes from "prop-types";
import { useErrorBoundary } from "react-error-boundary";
// Components
import { Button, Container } from "react-bootstrap";
// Utils
import { getPreferredTheme, setTheme } from "../util";

// #region component
const propTypes = { error: PropTypes.object.isRequired };

const AppFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  React.useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  return (
    <main className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <Container className="text-center">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{`${error.name}: ${error.message}`}</pre>
        <Button onClick={resetBoundary}>Reset Error Boundary</Button>
      </Container>
    </main>
  );
};

AppFallback.propTypes = propTypes;
// #endregion

export default AppFallback;
