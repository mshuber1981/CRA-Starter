import React from "react";
import { Element, Link } from "react-scroll";
// icons
import { FaChevronCircleDown } from "react-icons/fa";
// Components
import { BackToTop, Title } from "../components/globalStyledComponents";
import { Container } from "react-bootstrap";

export default function Home() {
  React.useEffect(() => {
    const updateTitle = () => (document.title = "Route 1");
    updateTitle();
  }, []);

  return (
    <>
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
        <Element name={"scroll"} id="scroll">
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
    </>
  );
}
