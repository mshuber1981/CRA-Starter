import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// #region styled-components
const TitleDiv = styled.div`
  display: inline-block;
  max-width: 90vw;
  word-wrap: break-word;
  margin: 0.5rem 0;
  font-family: "Permanent Marker";

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    margin: 0 auto 0 auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--bs-primary), var(--bs-body-color))"
        : "linear-gradient(to right, var(--bs-primary), var(--bs-body-color))"};
  }
`;
// #endregion

// #region component
const propTypes = {
  size: PropTypes.oneOf(["h1", "h2"]),
  text: PropTypes.string.isRequired,
};
const defaultProps = { size: "h1" };

const Title = ({ size, text }) => {
  return (
    <TitleDiv>
      {size === "h1" ? <h1>{text}</h1> : <h2>{text}</h2>}
      <div className="underline" />
    </TitleDiv>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
// #endregion

export default Title;
