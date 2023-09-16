import React, { Suspense } from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
const Images = React.lazy(() => import("./Picture"));

const StyledDiv = styled.div`
  .icon {
    font-size: 10rem;
    margin: 0 auto;
  }

  picture {
    width: 100%;
    max-width: 40rem;
    margin: 1rem auto 1rem auto;
  }
`;

const ResponsiveImages = () => {
  return (
    <StyledDiv className="d-flex flex-column justify-content-center my-2">
      <Suspense
        fallback={<Icon icon="mdi:picture-360-outline" className="icon" />}
      >
        <Images />
      </Suspense>
    </StyledDiv>
  );
};

export default ResponsiveImages;
