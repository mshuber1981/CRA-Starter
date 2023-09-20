import { createGlobalStyle } from "styled-components";
// Data
import { primary } from "../data";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-color: ${primary};
  --dark-text-color: #212529;
  --light-text-color: #dee2e6;
  --hover-color: rgba(33, 37, 41, 0.5);
  --nav-height: 55px;
  --transition: all 0.3s linear;
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

/* Navbar */
.navbar {
  height: var(--nav-height);
  background: var(--primary-color);

  .container {
    background: var(--primary-color);

    .nav-img {
      background: var(--bs-body-color);
    }

    .nav-link {
      color: var(--dark-text-color);

      &:hover {
        color: var(--hover-color);
      }
    }

    .nav-link.active {
      font-weight: bold;
    }
  }
}

/* Buttons */
:not(.btn-check) + .btn:active {
  background-color: var(--bs-emphasis-color);
  border: 1px solid var(--primary-color);
  color: var(--bs-body-bg);
}

.btn-primary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: var(--bs-body-color);
  margin: 0.25rem 0;

  &:hover {
    background-color: var(--bs-body-bg);
    border: 1px solid var(--primary-color);
    color: var(--bs-body-color);
  }
}

/* Link Icons */
.link-icons {
    line-height: 0;
    font-size: 2.25rem;
    margin: 0 1rem;
    transition: var(--transition);
    color: var(--dark-text-color);

    &:hover {
      color: var(--hover-color);
    }
  }
`;

export default GlobalStyles;
