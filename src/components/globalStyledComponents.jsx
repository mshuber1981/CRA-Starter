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
import { IoMdCloseCircle } from "react-icons/io";

// Animations
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

      .toggle-btn {
        background: transparent;
      }

      .nav-logo {
        height: calc(var(--nav-height) - 0.5rem);
        width: calc(var(--nav-height) - 0.5rem);
        border-radius: 50%;
        background: var(--dark);
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
      theme.name === "light" ? "var(--dark-overlay)" : "var(--light-overlay)"};

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      .nav-header {
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

        li {
          transition: all 0.2s ease-in-out;

          .link {
            font-size: 1.25rem;
            text-transform: capitalize;
            letter-spacing: 1px;
            cursor: pointer;
            border-radius: var(--radius);
            padding: 0 0.25rem;
            color: ${({ theme }) =>
              theme.name === "light" ? "var(--dark)" : "var(--light)"};

            &:hover {
              color: var(--primary);
              border: 2px solid var(--primary);
              background: ${({ theme }) =>
                theme.name === "light" ? "var(--dark)" : "transparent"};
            }
          }

          .active {
            color: var(--active);
          }
        }

        li:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export function NavBar({ pageLinks }) {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <Element name={pageLinks[0].to}>
        <FixedNavSpacer />
      </Element>
      <StyledNavBar>
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} alt="Navigation Logo" className="nav-logo" />
            <button className="toggle-btn" onClick={() => openSidebar()}>
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

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;
  font-size: 2.5rem;
  line-height: 0;
  border-radius: 50%;
  transition: var(--transition);
  background: ${({ theme }) =>
    theme.name === "light" ? "var(--light)" : "var(--dark)"};

  &.show-up {
    visibility: visible;
  }

  &:hover {
    color: var(--primary);
  }

  @media screen and (min-width: 800px) {
    font-size: 3rem;
    bottom: calc(var(--min-footer-height) + 4rem);
    right: 4rem;
  }
`;

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
    <StyledDiv ref={up}>
      <ScrollLink to={home.links[0].to} offset={0} smooth={true}>
        <FaChevronCircleUp />
      </ScrollLink>
    </StyledDiv>
  );
}

// Sidebar
const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  transition: var(--transition);
  transform: scale(0);
  background: ${({ theme }) =>
    theme.name === "light" ? "var(--dark-overlay)" : "var(--light-overlay)"};

  &.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }

  .sidebar {
    display: grid;
    align-items: center;
    grid-template-rows: 0.5fr 4fr 0.5fr;
    width: 90vw;
    height: 95vh;
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: 1rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};

    .close-sidebar {
      font-size: 2.5rem;
      justify-self: end;
    }

    .toggle-theme {
      justify-self: center;
    }
  }
`;

export function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <StyledSidebar className={isSidebarOpen ? "show" : ""}>
      <aside className="sidebar">
        <IoMdCloseCircle
          className="close-sidebar"
          onClick={() => closeSidebar()}
        />
        <div></div>
        <ToggleSwitch />
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

  .footer-icons {
    font-size: 2rem;
    border-radius: 50%;
    transition: var(--transition);
    border: 1px solid
      ${({ theme }) =>
        theme.name === "light" ? "var(--light)" : "var(--dark)"};
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--dark)" : "var(--light)"};
    background: ${({ theme }) =>
      theme.name === "light" ? "var(--light)" : "var(--dark)"};

    &:hover {
      color: ${({ theme }) =>
        theme.name === "light" ? "var(--light)" : "var(--dark)"};
      background: ${({ theme }) =>
        theme.name === "light" ? "var(--dark)" : "var(--light)"};
    }
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <FaGithub className="footer-icons" />
    </StyledFooter>
  );
}
