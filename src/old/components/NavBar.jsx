import React from "react";
import { useAppContext } from "../appContext";
import { Link, useLocation } from "react-router-dom";
import { Link as ToLink } from "react-scroll";
import styled from "styled-components";
import PropTypes from "prop-types";
// Data
import { navLogo } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;

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

// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

function ThemeToggle() {
  const { theme, toggleTheme, closeExpanded } = useAppContext();

  return (
    <StyledSwitch onClick={closeExpanded}>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>
        {theme === "light" ? (
          <Icon icon="game-icons:sunflower" />
        ) : (
          <Icon icon="game-icons:moon" />
        )}
      </div>
    </StyledSwitch>
  );
}

export default function NavBar({ navLinks }) {
  const { theme, isExpanded, toggleExpanded, closeExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>{navLogo}</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/" ? (
                navLinks.routes.map((el) => {
                  return (
                    <Nav.Item key={el.id}>
                      <Link
                        to={el.route}
                        className={
                          pathname === el.route ? "nav-link active" : "nav-link"
                        }
                        onClick={closeExpanded}
                      >
                        {el.name}
                      </Link>
                    </Nav.Item>
                  );
                })
              ) : (
                <>
                  <Nav.Item>
                    <Link
                      to={"/"}
                      className={
                        pathname === "/" ? "nav-link active" : "nav-link"
                      }
                      onClick={closeExpanded}
                    >
                      {"Home"}
                    </Link>
                  </Nav.Item>
                  {navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ToLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ToLink>
                      </Nav.Item>
                    );
                  })}
                </>
              )}
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.object,
};
