import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --nav-height: 55px;
}

/*
=============== 
Global Styles
===============
*/
main {
  min-height: calc(100vh - 2 * var(--nav-height) - 1.5rem);
}

section {
  margin: 0.5rem 0;
}

/* Link Icons */
.link-icons {
    line-height: 0;
    font-size: 2.25rem;
    margin: 0 1rem;
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

    &:hover {
      color: ${({ theme }) =>
        theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
    }
  }
`;

export default GlobalStyles;
