import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
// Data
import { Logo } from "../data";
// Icons
import { FaBars, FaChevronCircleUp, FaGithub } from "react-icons/fa";
import { GiSunflower, GiMoon } from "react-icons/gi";

// Animation
export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Spacer for fixed Navigation bar
export const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

// Back to top link
export function BackToTop({ home }) {
  const [scrollY, setScrollY] = useState("");
  const up = useRef(null);

  useEffect(
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
    <div className="up" ref={up}>
      <ScrollLink to={home.links[0].to} offset={0} smooth={true}>
        <FaChevronCircleUp />
      </ScrollLink>
    </div>
  );
}

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
            "<div class='container'><h2>Sample H2 Title</h2><div class='underline'/></div>");
    },
    [heading, title]
  );

  return (
    <>
      <StyledTitle ref={titleElement} />
    </>
  );
}

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: inline-flex;
  align-items: center;
  height: calc(var(--nav-height) - 1.5rem);
  width: calc(var(--nav-height) + 0.5rem);
  font-size: 1.9rem;
  border-radius: 30px;
  margin: 0.25rem;
  transition: var(--transition);
  border: 2px solid
    ${({ theme }) => (theme.name === "light" ? "var(--dark)" : "var(--light)")};
  color: ${({ theme }) =>
    theme.name === "light" ? "var(--dark)" : "var(--light)"};

  &:hover {
    background: var(--primary);
  }

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;

export function ToggleSwitch() {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <StyledSwitch className="toggle-theme">
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>{theme === "light" ? <GiSunflower /> : <GiMoon />}</div>
    </StyledSwitch>
  );
}

// Navbar
const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  width: 100%;
  background: transparent;
  z-index: 1;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .toggle-btn,
      .nav-logo {
        background: ${({ theme }) =>
          theme.name === "light" ? "var(--light)" : "var(--dark)"};
      }

      .nav-logo {
        height: calc(var(--nav-height) - 1rem);
        width: calc(var(--nav-height) - 1rem);
        border-radius: 50%;
      }

      .toggle-btn {
        font-size: 1.75rem;
        line-height: 0;
        border-color: transparent;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--dark)" : "var(--light)"};

        &:hover {
          color: var(--primary);
        }
      }
    }

    .nav-links {
      display: none;
    }

    .toggle-theme {
      display: none;
    }
  }

  @media screen and (min-width: 800px) {
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      .nav-header {
        .nav-logo {
          background: transparent;
        }

        .toggle-btn {
          display: none;
        }
      }

      .toggle-theme {
        display: inline-flex;
      }

      .nav-links {
        display: flex;
        justify-content: space-evenly;

        .link {
          font-size: 1.1rem;
          text-transform: capitalize;
          letter-spacing: 1px;
          cursor: pointer;
          transition: var(--transition);
          color: ${({ theme }) =>
            theme.name === "light" ? "var(--dark)" : "var(--light)"};

          &:hover {
            color: var(--primary);
          }
        }

        .active {
          color: var(--active);
        }
      }
    }
  }
`;

export function NavBar({ pageLinks }) {
  return (
    <>
      <Element name={pageLinks[0].to}>
        <FixedNavSpacer />
      </Element>
      <StyledNavBar>
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} alt="Navigation Logo" className="nav-logo" />
            <button className="toggle-btn">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {pageLinks.map(function ({ id, name, to }, index) {
              return (
                <li key={id}>
                  {to.startsWith("/") ? (
                    <Link to={to} className="link">
                      {name}
                    </Link>
                  ) : (
                    <ScrollLink
                      to={to}
                      offset={index === 0 ? 0 : -80}
                      smooth={true}
                      spy={true}
                      activeClass="active"
                      className="link"
                    >
                      {name}
                    </ScrollLink>
                  )}
                </li>
              );
            })}
          </ul>
          <ToggleSwitch />
        </div>
      </StyledNavBar>
    </>
  );
}

// Sidebar
const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  /* z-index: -999; */
  z-index: 2;
  transition: var(--transition);
  transform: scale(0);
  background: rgba(0, 0, 0, 0.5);

  &.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }

  .sidebar {
    width: 90vw;
    height: 95vh;
    max-width: var(--fixed-width);
    background: var(--light);
    border-radius: var(--radius);
    /* box-shadow: var(--dark-shadow); */
    position: relative;
    padding: 4rem 2rem;
  }
`;

export function Sidebar() {
  return (
    <StyledSidebar>
      <aside className="sidebar">
        <h1>test</h1>
      </aside>
    </StyledSidebar>
  );
}

// Footer
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--min-footer-height);
  background: var(--primary);

  svg {
    font-size: 2rem;
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--light)" : "var(--dark)"};

    &:hover {
      color: ${({ theme }) =>
        theme.name === "light" ? "var(--dark)" : "var(--light)"};
    }
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <FaGithub />
    </StyledFooter>
  );
}
