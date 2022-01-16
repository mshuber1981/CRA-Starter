import styled from "styled-components";
import { FaBars, FaReact } from "react-icons/fa";

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  background: var(--primary);
  position: relative;
  z-index: 1;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-logo {
        font-size: 1.5rem;
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--light)" : "var(--dark)"};
      }

      .toggle-btn {
        font-size: 1.5rem;
        line-height: 0;
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        transition: var(--transition);
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--light)" : "var(--dark)"};
      }
    }

    .nav-links {
      display: none;
    }
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      .toggle-btn {
        display: none;
      }

      .nav-links {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        width: 50%;
        margin: 0 auto;

        .link-btn {
          font-size: 1.1rem;
          text-transform: capitalize;
          letter-spacing: 1px;
          color: ${({ theme }) =>
            theme.name === "light" ? "var(--light)" : "var(--dark)"};
        }
      }
    }
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <div className="nav-center">
        <div className="nav-header">
          <FaReact className="nav-logo" />
          <button className="toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="link-btn">
              Section 1
            </a>
          </li>
          <li>
            <a href="#" className="link-btn">
              Section 2
            </a>
          </li>
          <li>
            <a href="#" className="link-btn">
              Section 3
            </a>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
