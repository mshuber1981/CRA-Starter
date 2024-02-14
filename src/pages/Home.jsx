import React from "react";
// State
import { useGetUsersQuery } from "../apiSlice";
// Icons
import { Icon } from "@iconify/react";
// Components
import { useErrorBoundary } from "react-error-boundary";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Row,
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
  const { showBoundary } = useErrorBoundary();
  const {
    data: userData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  const cards = [
    {
      id: 1,
      title: "One",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aliquam totam asperiores!",
    },
    {
      id: 2,
      title: "Two",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt provident minus.",
    },
    {
      id: 3,
      title: "Three",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi ducimus velit!",
    },
  ];

  let content;

  if (isLoading) {
    content = <Spinner animation="border" variant="primary" />;
  } else if (isSuccess) {
    content = (
      <p>{`My name is ${userData.name} and I have ${userData.public_repos} public GitHub repos.`}</p>
    );
  } else if (isError) {
    if (error.status !== "FETCH_ERROR") {
      content = <p>{`${error.status}: ${error.data.message}`}</p>;
    } else {
      content = <p>{error.status}</p>;
    }
  }

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
        <Row>
          {cards.map(({ id, title, text }) => {
            return (
              <Col key={id}>
                <Card
                  className="object-fit-cover my-2 mx-auto"
                  style={{
                    width: "20rem",
                    background: "var(--bs-tertiary-color)",
                  }}
                >
                  <Card.Img variant="top" src={Logo} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Carousel"} />
        </Container>
        <Carousel style={{ background: "var(--bs-tertiary-color)" }}>
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
        <Title size={"h2"} text={"API Data"} />
        {content}
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
