import React from "react";
import styled from "styled-components";
// Components
import { Title } from "../components/globalStyledComponents";
import { Container } from "react-bootstrap";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));
`;

export default function NotFound() {
  return (
    <>
      <StyledNotFound>
        <Container className="d-flex">
          <Title>
            <h2>404</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <p className="text-center">Sorry, page not found...</p>
      </StyledNotFound>
    </>
  );
}
