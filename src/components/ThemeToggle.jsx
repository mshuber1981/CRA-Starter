import React from "react";
import PropTypes from "prop-types";
// State
import { useDispatch, useSelector } from "react-redux";
import { closeExpanded, selectMode, toggleMode } from "../appSlice";
// Styles
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";

// #region styled-components
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  margin: 0.5rem 0;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid var(--dark-text-color);
  background-color: var(--hover-color);

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    color: var(--light-text-color);
  }
`;
// #endregion

// #region component
const propTypes = {
  closeDelay: PropTypes.number.isRequired,
};
const defaultProps = { closeDelay: 250 };

const ThemeToggle = ({ closeDelay }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectMode);

  return (
    <StyledSwitch
      onClick={() => {
        setTimeout(() => {
          dispatch(closeExpanded());
        }, closeDelay);
      }}
    >
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={() => dispatch(toggleMode())}
      />
      <div>
        {theme === "light" ? (
          <Icon icon="game-icons:sunflower" />
        ) : (
          <Icon icon="game-icons:moon" />
        )}
      </div>
    </StyledSwitch>
  );
};

ThemeToggle.propTypes = propTypes;
ThemeToggle.defaultProps = defaultProps;
// #endregion

export default ThemeToggle;
