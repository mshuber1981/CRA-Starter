import React, { Suspense } from "react";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import Title from "../components/Title";
// Icons
import { Icon } from "@iconify/react";

// #region constants
const Images = React.lazy(() => import("../components/Picture"));
// #endregion

// #region styled-components
const StyledDiv = styled.div`
  .icon {
    font-size: 10rem;
    margin: 0 auto;
  }
`;
// #endregion

// #region component
const ResponsiveImages = () => {
  return (
    <section>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h1"} text={"Responsive Images"} />
        </Container>
        <StyledDiv>
          <Suspense
            fallback={<Icon icon="mdi:picture-360-outline" className="icon" />}
          >
            <Images />
          </Suspense>
        </StyledDiv>
      </Container>
    </section>
  );
};
// #endregion

export default ResponsiveImages;
