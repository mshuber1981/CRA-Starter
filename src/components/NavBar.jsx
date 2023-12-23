import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// Routing
import { Link, useLocation } from "react-router-dom";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
// Media
import Logo from "../media/logo192.png";
// Utils
import { getStoredTheme, getPreferredTheme, setTheme } from "../util";

// #region styled-components
const StyledDiv = styled.div`
  .spacer {
    height: ${({ $height }) => $height};
  }
  .logo-img {
    background: var(--bs-body-bg);
  }
`;
// #endregion

// #region component
const propTypes = {
  homeRouteName: PropTypes.string,
  callBack: PropTypes.func,
  closeDelay: PropTypes.number.isRequired,
  height: PropTypes.string,
  logo: PropTypes.node,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      page: PropTypes.element.isRequired,
    })
  ).isRequired,
};
const defaultProps = {
  homeRouteName: "Home",
  closeDelay: 125,
  height: "55px",
  logo: Logo,
};

const NavBar = ({
  homeRouteName,
  callBack,
  closeDelay,
  height,
  logo,
  routes,
}) => {
  const [isExpanded, setisExpanded] = React.useState(false);
  const [themeState, setThemeState] = React.useState("light");
  const { pathname } = useLocation();

  const setThemes = React.useCallback(
    (theme) => {
      if (theme) {
        setThemeState(theme);
        setTheme(theme);
        if (callBack) {
          callBack(theme);
        }
      } else {
        setThemeState(getPreferredTheme());
        setTheme(getPreferredTheme());
        if (callBack) {
          callBack(getPreferredTheme());
        }
      }
    },
    [setThemeState, callBack]
  );

  React.useEffect(() => {
    setThemes();
  }, [setThemes]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setThemes();
      }
    });

  return (
    <StyledDiv $height={height}>
      <div className="spacer" />
      <Navbar
        id="nav"
        bg="primary"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className={"d-inline-block align-top rounded-circle logo-img"}
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setisExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to="/"
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    setTimeout(() => {
                      setisExpanded(false);
                    }, closeDelay);
                  }}
                >
                  {homeRouteName}
                </Link>
              </Nav.Item>
              {routes.map((element) => {
                return (
                  <Nav.Item key={element.id}>
                    <Link
                      to={element.route}
                      className={
                        pathname === element.route
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={() => {
                        setTimeout(() => {
                          setisExpanded(false);
                        }, closeDelay);
                      }}
                    >
                      {element.name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Nav>
              <ThemeToggle
                closeDelay={closeDelay}
                setExpanded={setisExpanded}
                setTheme={setThemes}
                theme={themeState}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledDiv>
  );
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;
