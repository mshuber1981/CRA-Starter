import React from "react";
import styled from "styled-components";
// Components
import Title from "../components/Title";
// Utils
import { updateTitle } from "../util";

// #region styled-components
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
`;
// #endregion

// #region component
const NotFound = () => {
  React.useEffect(() => {
    updateTitle("Not Found...");
  }, []);

  return (
    <StyledSection>
      <Title text={"404"} />
      <p className="display-6 text-center">Sorry, page not found...</p>
    </StyledSection>
  );
};
// #endregion

export default NotFound;
