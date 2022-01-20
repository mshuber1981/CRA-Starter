import { Element } from "react-scroll";
// Components
import NavBar from "../components/NavBar";
import { FixedNavSpacer } from "../components/globalStyledComponents";
import Hero from "../components/Hero";
import { Section1, Section2, Section3 } from "../components/HomeSections";
import Footer from "../components/Footer";

export default function Home({ home }) {
  return (
    <>
      <NavBar pageLinks={home.links} />
      <FixedNavSpacer />
      <Element name={home.links[0].to}>
        <Hero section1={home.links[1].to} />
      </Element>
      <main>
        <Section1 section1={home.links[1]} />
        <Section2 section2={home.links[2]} />
        <Section3 section3={home.links[3]} />
      </main>
      <Footer />
    </>
  );
}
