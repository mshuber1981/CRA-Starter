import React from "react";
// Components
import { NavBar, Title } from "../components/globalStyledComponents";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <Container className="d-flex">
            <Title>
              <h2>Route 1</h2>
              <div className="underline"></div>
            </Title>
          </Container>
        </section>
      </main>
    </>
  );
}
