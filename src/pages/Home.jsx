import React from "react";
// Components
import {
  Accordion,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Stack,
  Spinner,
} from "react-bootstrap";
// Data
import { homeRouteName } from "../data";
// Utils
import { updateTitle } from "../util";

// #region constants
const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
// #endregion

// #region component
const Home = () => {
  React.useEffect(() => {
    homeRouteName ? updateTitle(homeRouteName) : updateTitle("Home");
  }, []);

  return (
    <section>
      <Container>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h5>h6</h5>
        <p>p</p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {variants.map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
        <Stack direction="horizontal" gap={2} className="mb-1">
          {variants.map((variant) =>
            variant === "light" ? (
              <Badge key={variant} bg={variant} text="dark">
                {variant} badge
              </Badge>
            ) : (
              <Badge key={variant} bg={variant}>
                {variant} badge
              </Badge>
            )
          )}
        </Stack>
        <Stack direction="vertical" gap={2} className="w-25 mb-1">
          {variants.map((variant) => (
            <ButtonGroup key={variant}>
              <Button variant={variant}>{variant} button group</Button>
              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-nested-dropdown"
                variant={variant}
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          ))}
        </Stack>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <br />
        <Button>Primary</Button>
      </Container>
    </section>
  );
};
// #endregion

export default Home;
