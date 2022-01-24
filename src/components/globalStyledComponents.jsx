import { useEffect, useRef } from "react";
import styled from "styled-components";

// Spacer for fixed Navigation bar
export const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

// Titles
const StyledTitle = styled.div`
  text-align: center;
  margin: 0 auto;

  .container {
    display: inline-block;

    h1,
    h2,
    h3,
    h4 {
      line-height: 1.25;
    }

    .underline {
      height: 0.25rem;
      width: 75%;
      margin: 0 auto;
      background: ${({ theme }) =>
        theme.name === "light"
          ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
          : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
    }
  }
`;
export function Title({ heading, title }) {
  const titleElement = useRef(null);

  useEffect(
    function () {
      heading !== undefined && title !== undefined
        ? (titleElement.current.innerHTML = `<div class="container"><${heading}>${title}</${heading}><div class="underline" /></div>`)
        : (titleElement.current.innerHTML =
            "<div class='container'><h1>Sample H1 Title</h1><div class='underline'/></div>");
    },
    [heading, title]
  );

  return (
    <>
      <StyledTitle ref={titleElement} />
    </>
  );
}
