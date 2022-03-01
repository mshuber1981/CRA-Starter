// Components
import { NavBar, Sidebar, Title } from "../components/globalStyledComponents";

export default function Route1Example({ route1 }) {
  return (
    <>
      <NavBar pageLinks={route1.links} />
      <Sidebar pageLinks={route1.links} />
      <main>
        <section className="section section-center">
          <Title heading={"h1"} title={"Route 1"} />
        </section>
      </main>
    </>
  );
}
