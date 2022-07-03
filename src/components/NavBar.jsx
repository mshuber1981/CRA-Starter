import React from "react";
// Data
import { Logo } from "../data";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  const { theme, isExpanded, toggleExpanded, closeExpanded } = useAppContext();

  return (
    <>
      <Element to={"home"}>
        <FixedNavSpacer />
      </Element>
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top bg-dark rounded-circle nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>Home</Nav.Item>
            </Nav>
            <Nav>{/* <ToggleSwitch /> */}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
