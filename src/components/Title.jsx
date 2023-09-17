import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// #region styled-components
const TitleDiv = styled.div`
  display: inline-block;
  max-width: 90vw;
  word-wrap: break-word;
  margin: 0 auto 0 auto;
  text-align: center;

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-color), var(--dark-text-color))"
        : "linear-gradient(to right, var(--primary-color), var(--light-text-color))"};
  }
`;
// #endregion

// #region component
const propTypes = {
  size: PropTypes.oneOf(["h1", "h2"]),
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
const defaultProps = { size: "h1" };

const Title = ({ size, text, className }) => {
  return (
    <TitleDiv>
      {size === "h1" ? (
        <h1 className={className}>{text}</h1>
      ) : (
        <h2 className={className}>{text}</h2>
      )}
      <div className="underline" />
    </TitleDiv>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
// #endregion

export default Title;
