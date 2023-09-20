import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";

// #region styled-components
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--nav-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;

  &.show-up {
    visibility: visible;
  }
`;
// #endregion

// #region component
const BackToTop = () => {
  const [scrollY, setScrollY] = React.useState("");
  const up = React.useRef(null);

  React.useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
      scrollY > 500
        ? up.current.classList.add("show-up")
        : up.current.classList.remove("show-up");
    };
    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  return (
    <StyledDiv
      ref={up}
      className="link-icons"
      onClick={() =>
        window.scroll({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <Icon icon="fa-solid:chevron-circle-up" />
    </StyledDiv>
  );
};
// #endregion

export default BackToTop;
