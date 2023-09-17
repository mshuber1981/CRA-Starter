import React from "react";
import styled from "styled-components";
// Components
import { Title } from "../components/globalStyledComponents";
import { Container } from "react-bootstrap";

const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  React.useEffect(() => {
    const updateTitle = () => (document.title = "404");
    updateTitle();
  }, []);

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex">
          <Title>
            <h2 className="display-1">404</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <p className="text-center display-6">Sorry, page not found...</p>
      </StyledNotFound>
    </>
  );
}
