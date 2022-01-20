import NavBar from "../components/NavBar";

export default function Route1Example({ route1 }) {
  return (
    <>
      <NavBar pageLinks={route1.links} />
      <main>
        <section className="section section-center">
          <h1>h1</h1>
        </section>
      </main>
    </>
  );
}
