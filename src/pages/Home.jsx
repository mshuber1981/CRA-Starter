import React from "react";
import { useErrorBoundary } from "react-error-boundary";
// Components
import { Button, Card, Container, Stack } from "react-bootstrap";
import Title from "../components/Title";
// Media
import Logo from "../media/logo192.png";
// Utils
import { updateTitle } from "../util";
// Data
import { homeRouteName } from "../data";

// #region component
const Home = () => {
  const { showBoundary } = useErrorBoundary();

  React.useEffect(() => {
    homeRouteName ? updateTitle(homeRouteName) : updateTitle("Home");
  }, []);

  return (
    <section>
      <Container>
        <Container className="d-flex justify-content-center">
          <Title text={"Themed h1 title"} />
        </Container>
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
        <br />
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
