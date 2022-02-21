// Components
import Hero from "../components/Hero";
import { Section1, Section2, Section3 } from "../components/HomeSections";
import {
  BackToTop,
  Footer,
  NavBar,
  Sidebar,
} from "../components/globalStyledComponents";

export default function Home({ home }) {
  return (
    <>
      <NavBar pageLinks={home.links} />
      <Sidebar pageLinks={home.links} />
      <Hero section1={home.links[1].to} />
      <main>
        <Section1 section1={home.links[1]} />
        <Section2 section2={home.links[2]} />
        <Section3 section3={home.links[3]} />
      </main>
      <BackToTop home={home} />
      <Footer />
    </>
  );
}
