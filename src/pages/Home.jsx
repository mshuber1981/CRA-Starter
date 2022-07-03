import React from "react";
import { useAppContext } from "../appContext";
// Components
import { NavBar, BackToTop, Title } from "../components/globalStyledComponents";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <>
      <NavBar />
      <main>
        <section>
          <Container className="d-flex">
            <Title>
              <h2>h1 Title</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Container>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              className="mt-5"
              onClick={toggleTheme}
            >
              Themed Button
            </Button>
          </Container>
        </section>
      </main>
      <BackToTop />
    </>
  );
}
