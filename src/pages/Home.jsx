import React from "react";
import { useErrorBoundary } from "react-error-boundary";
// Components
import {
  Accordion,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Container,
  Dropdown,
  DropdownButton,
  Stack,
} from "react-bootstrap";
import Title from "../components/Title";
// Media
import Logo from "../media/logo192.png";
// Utils
import { updateTitle } from "../util";
// Data
import { homeRouteName } from "../data";

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
  const { showBoundary } = useErrorBoundary();

  React.useEffect(() => {
    homeRouteName ? updateTitle(homeRouteName) : updateTitle("Home");
  }, []);

  return (
    <section>
      <Container>
        <Title text={"Themed h1 title"} />
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h5>h6</h5>
        <p>p</p>
        <Button
          className=""
          onClick={() =>
            showBoundary({
              name: "Error",
              message: "Simulated error message",
            })
          }
        >
          Simulate Error Boundary
        </Button>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Accordion"} />
        </Container>
        <Accordion className="my-2" defaultActiveKey="0">
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
        <Title size={"h2"} text={"Alerts"} />
        {variants.map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
        <Title size={"h2"} text={"Badges"} />
        <Stack direction="horizontal" gap={2} className="my-2">
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
        <Title size={"h2"} text={"Button Group"} />
        <Stack direction="vertical" gap={2} className="w-25 my-2">
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
        <Title size={"h2"} text={"Buttons"} />
        <Stack direction="horizontal" gap={2} className="my-2">
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </Stack>
        <Title size={"h2"} text={"Cards"} />
        <Card className="object-fit-cover my-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Logo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
// #endregion

export default Home;
