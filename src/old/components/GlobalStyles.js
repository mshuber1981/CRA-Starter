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
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: ${primary};
  --primary-dark: #316e7e;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --transition: all 0.3s linear;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

a:hover {
  cursor: pointer;
}

.navbar {
  border-bottom: 1px solid ${primary};
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}

img:not(.nav-logo) {
  width: 100%;
  height: auto;
  display: block;
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

.title {
    font-family: "Permanent Marker";
}
`;

export default GlobalStyles;
