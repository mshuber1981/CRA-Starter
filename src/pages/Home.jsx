import { FixedNavSpacer } from "../components/globalStyledComponents";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <FixedNavSpacer />
      <Hero />
      <main>
        <section className="section section-center">
          <h2>h2</h2>
        </section>
      </main>
    </>
  );
}
