import React from "react";
import { useErrorBoundary } from "react-error-boundary";
// Components
import { Button } from "react-bootstrap";

export default function AppFallBack({ error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{`${error.name}: ${error.message}`}</pre>
      <Button onClick={resetBoundary}>Reset Boundary</Button>
    </main>
  );
}
