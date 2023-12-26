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
  margin: 1rem 0;
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

.carousel {
  height: 25rem;
  width: 50rem;
  max-width: 90vw;
  border-radius: 1rem;
  margin: 1rem auto;

  .carousel-item {
    height: 25rem;
    width: 50rem;
    max-width: 90vw;

    .img-container{
      height: 12.5rem;
      svg {
        font-size: 10rem;
      }
    } 
  }
}
`;

export default GlobalStyles;
