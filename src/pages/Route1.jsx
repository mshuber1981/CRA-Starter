import React from "react";
import { Element, Link } from "react-scroll";
// icons
import { FaChevronCircleDown } from "react-icons/fa";
// Components
import { BackToTop, NavBar, Title } from "../components/globalStyledComponents";
import SEO from "../components/SEO";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <SEO title={"Route 1 Title"} />
      <NavBar />
      <main>
        <Element name={"top"}>
          <section className="section">
            <Container className="d-flex">
              <Title>
                <h2>Route 1</h2>
                <div className="underline"></div>
              </Title>
            </Container>
            <Container className="text-center">
              <Link to={"scroll"} className="link-icons">
                <FaChevronCircleDown />
              </Link>
            </Container>
          </section>
        </Element>
        <section className="section">
          <Element name={"scroll"}>
            <Title>
              <h2>Scroll to</h2>
              <div className="underline"></div>
            </Title>
          </Element>
          <p className="w-75">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            necessitatibus! Consequuntur, blanditiis expedita, praesentium
            recusandae quia quos quidem quae ipsa voluptatem corporis porro?
            Neque, in.
          </p>
        </section>
        <BackToTop home={"top"} />
      </main>
    </>
  );
}
