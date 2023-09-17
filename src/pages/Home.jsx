import React from "react";
// Components
import { Button, Spinner } from "react-bootstrap";

// #region component
const Home = () => {
  return (
    <section>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <br />
      <Button>Primary</Button>
    </section>
  );
};
// #endregion

export default Home;
