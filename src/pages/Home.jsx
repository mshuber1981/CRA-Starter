import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import { selectData } from "./homeSlice";
// Components
import { Title, Loading } from "../components/globalStyledComponents";
import ResponsiveImages from "../components/ResponsiveImages";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  const { theme, toggleTheme } = useAppContext();
  const data = useSelector(selectData);

  React.useEffect(() => {
    const updateTitle = () =>
      data.name
        ? (document.title = `${data.name} | CRA Template`)
        : (document.title = "Home Title");
    updateTitle();
  }, [data]);

  return (
    <>
      <section>
        <Container className="d-flex">
          <Title>
            <h2>h1 Title</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container className="">
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <Button
            size="lg"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            className="mt-2 mb-2"
            onClick={toggleTheme}
          >
            Themed Button
          </Button>
          <br />
          <Loading />
          <ResponsiveImages />
        </Container>
      </section>
    </>
  );
}
