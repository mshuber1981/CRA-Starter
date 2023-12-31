import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectMode } from "../appSlice";
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
  border: 2px solid;
  background: var(--bs-body-bg);

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
  }
`;
// #endregion

// #region functions
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
// #endregion

// #region component
const propTypes = {
  closeDelay: PropTypes.number,
  setExpanded: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};
const defaultProps = { closeDelay: 250 };

const ThemeToggle = ({ closeDelay, setExpanded, setTheme }) => {
  const theme = useSelector(selectMode);

  const toggleTheme = () => {
    const themType = theme === "light" ? "dark" : "light";
    setTheme(themType);
    setStoredTheme(themType);
  };

  return (
    <StyledSwitch
      onClick={() => {
        setTimeout(() => {
          setExpanded(false);
        }, closeDelay);
      }}
    >
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={() => toggleTheme()}
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
