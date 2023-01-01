import React from "react";
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll/modules";
// Icons
import { Icon } from "@iconify/react";

// Animations
const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--primary);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0.5rem auto 0 auto;
  text-align: center;

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
        : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
  }
`;

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;

  .link-icons {
    color: ${({ theme }) => (theme.name === "light" ? "black" : "#EBECF0")};
  }

  &.show-up {
    visibility: visible;
  }
`;

export function BackToTop({ home }) {
  const [scrollY, setScrollY] = React.useState("");
  const up = React.useRef(null);

  React.useEffect(
    function () {
      function updateScrollY() {
        setScrollY(window.pageYOffset);

        if (scrollY > 500) {
          up.current.classList.add("show-up");
        } else {
          up.current.classList.remove("show-up");
        }
      }

      window.addEventListener("scroll", updateScrollY);

      return () => window.removeEventListener("scroll", updateScrollY);
    },
    [scrollY]
  );

  return (
    <StyledDiv ref={up}>
      <ScrollLink to={home} className="link-icons">
        <Icon icon="fa-solid:chevron-circle-up" />
      </ScrollLink>
    </StyledDiv>
  );
}
