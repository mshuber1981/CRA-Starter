import React from "react";
import styled from "styled-components";
// Components
import Title from "../components/Title";
import { Container } from "react-bootstrap";
// Utils
import { updateTitle } from "../util";

// #region styled-components
const StyledSection = styled.section`
  .container {
    min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
  }
`;
// #endregion

// #region component
const NotFound = () => {
  React.useEffect(() => {
    updateTitle("Not Found...");
  }, []);

  return (
    <StyledSection>
      <Container className="d-flex flex-column justify-content-center">
        <Title text={"404"} className={"display-1"} />
        <p className="display-6 text-center">Sorry, page not found...</p>
      </Container>
    </StyledSection>
  );
};
// #endregion

export default NotFound;
