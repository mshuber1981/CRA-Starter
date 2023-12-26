import React from "react";
import { useErrorBoundary } from "react-error-boundary";
// Icons
import { Icon } from "@iconify/react";
// Components
import {
  Button,
  Card,
  Carousel,
  Container,
  Stack,
  Spinner,
} from "react-bootstrap";
import Title from "../components/Title";
// Media
import Logo from "../media/logo192.png";
// Utils
import { updateTitle } from "../util";
// Data
import { homeRouteName } from "../config";

// #region component
const Home = () => {
  // const [index, setIndex] = React.useState(0);
  const { showBoundary } = useErrorBoundary();

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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
        <Title size={"h2"} text={"Spinners"} />
        <br />
        <Spinner className={"m-2"} animation="border" />
        <Spinner className={"m-2"} animation="border" variant="primary" />
        <br />
        <Title size={"h2"} text={"Buttons"} />

        <Stack direction="horizontal" gap={2} className="flex-wrap my-2">
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
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Carousel"} />
        </Container>
        <Carousel className="bg-primary">
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center img-container">
              <Icon icon={"fa:github"} />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center img-container">
              <Icon icon={"fa:github"} />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center img-container">
              <Icon icon={"fa:github"} />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
      </Container>
    </section>
  );
};
// #endregion

export default Home;
