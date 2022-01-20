import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// Icons
import { FaBars } from "react-icons/fa";
// Data
import { Logo } from "../data";

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

      .nav-logo,
      .toggle-btn {
        font-size: 1.75rem;
      }

      .nav-logo {
        height: calc(var(--nav-height) - 1rem);
      }

      .toggle-btn {
        line-height: 0;
        border-color: transparent;
        background: transparent;
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

      .toggle-btn {
        display: none;
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

export default function NavBar({ pageLinks }) {
  return (
    <StyledNavBar>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="Navigation Logo" className="nav-logo" />
          <button className="toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {pageLinks.map(function ({ id, name, to }) {
            return (
              <li key={id}>
                {to.startsWith("/") ? (
                  <Link to={to} className="link">
                    {name}
                  </Link>
                ) : (
                  <ScrollLink
                    to={to}
                    offset={-80}
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
      </div>
    </StyledNavBar>
  );
}
