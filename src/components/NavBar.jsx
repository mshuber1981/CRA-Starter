import React from "react";
import PropTypes from "prop-types";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectIsExpanded, closeExpanded, toggleExpanded } from "../appSlice";
// Routing
import { Link, useLocation } from "react-router-dom";
// Styles
import styled from "styled-components";
// Media
import Logo from "../media/logo192.png";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// #region styled-components
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;
// #endregion

// #region component
const propTypes = {
  navRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      page: PropTypes.element.isRequired,
    })
  ).isRequired,
  navLogo: PropTypes.node.isRequired,
  navCloseDelay: PropTypes.number.isRequired,
};
const defaultProps = { navLogo: Logo, navCloseDelay: 125 };

const NavBar = ({ navLogo, navRoutes, navCloseDelay }) => {
  const isExpanded = useSelector(selectIsExpanded);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        data-bs-theme="light"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              src={navLogo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle nav-img"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => dispatch(toggleExpanded())}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to="/"
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    setTimeout(() => {
                      dispatch(closeExpanded());
                    }, navCloseDelay);
                  }}
                >
                  Home
                </Link>
              </Nav.Item>
              {navRoutes.map((element) => {
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
                          dispatch(closeExpanded());
                        }, navCloseDelay);
                      }}
                    >
                      {element.name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Nav>
              <ThemeToggle closeDelay={navCloseDelay} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;
