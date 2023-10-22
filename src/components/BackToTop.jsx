import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";

// #region styled-components
const StyledDiv = styled.div`
  position: fixed;
  bottom: ${({ $footerHeight }) => `calc(${$footerHeight} + 1.5rem)`};
  right: 1.5rem;
  visibility: hidden;
  line-height: 0;
  font-size: 2.25rem;
  margin: 0 1rem;
  color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

  &.show-up {
    visibility: visible;
  }

  &:hover {
    color: var(--bs-primary);
  }
`;
// #endregion

// #region component
const propTypes = {
  scrollNumber: PropTypes.number,
  footerHeight: PropTypes.string,
};
const defaultProps = {
  scrollNumber: 500,
  footerHeight: "55px",
};

const BackToTop = ({ scrollNumber, footerHeight }) => {
  const [scrollY, setScrollY] = React.useState(undefined);
  const up = React.useRef(null);

  React.useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
      scrollY > scrollNumber
        ? up.current.classList.add("show-up")
        : up.current.classList.remove("show-up");
    };
    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollY, scrollNumber]);

  return (
    <StyledDiv
      $footerHeight={footerHeight}
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

BackToTop.propTypes = propTypes;
BackToTop.defaultProps = defaultProps;
// #endregion

export default BackToTop;
