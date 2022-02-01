import { createGlobalStyle } from "styled-components";
import { active } from "../data";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  /* Primary light */
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  /* Primary dark */
  --primary-dark: #316e7e;
  --light: #FBFDFF;
  --dark: #27272A;
  --white: #fff;
  --black: #222;
  --active: ${() => (active ? active : "orangered")};
  --max-width: 1170px;
  --nav-height: 3.5rem;
  --min-footer-height: 10vh;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --transition: all 0.3s linear;
}

/*
=============== 
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

img:not(.nav-logo) {
  width: 100%;
  display: block;
}

.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

/*
=============== 
Scroll Links
===============
*/
.up {
    position: fixed;
    bottom: calc(var(--min-footer-height) + 1.5rem);
    right: 1.5rem;
    visibility: hidden;
    /* z-index: -1; */
  }

  .show-up {
    visibility: visible;
    /* z-index: 1; */
  }

.down,
  .up {
    font-size: 2.5rem;
    line-height: 0;
    border-radius: 50%;
    transition: var(--transition);
    background: ${({ theme }) =>
      theme.name === "light" ? "var(--light)" : "var(--dark)"};

    &:hover {
      color: var(--primary);
    }
  }

  @media screen and (min-width: 800px) {
    .down,
    .up {
      font-size: 3rem;
    }

    .up {
      bottom: calc(var(--min-footer-height) + 4rem);
    right: 4rem;
    }
  }
`;

export default GlobalStyles;
