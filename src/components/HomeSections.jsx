import styled from "styled-components";
import { Element } from "react-scroll";

const StyledSection1 = styled.section`
  min-height: 90vh;
`;

export function Section1({ section1 }) {
  return (
    <StyledSection1 className="section section-center">
      <Element name={section1.to}>
        <h2>h2</h2>
      </Element>
    </StyledSection1>
  );
}

export function Section2({ section2 }) {
  return (
    <StyledSection1 className="section section-center">
      <Element name={section2.to}>
        <h2>h2</h2>
      </Element>
    </StyledSection1>
  );
}

export function Section3({ section3 }) {
  return (
    <StyledSection1 className="section section-center">
      <Element name={section3.to}>
        <h2>h2</h2>
      </Element>
    </StyledSection1>
  );
}
