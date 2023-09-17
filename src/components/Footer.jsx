import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";

// #region constants

// #endregion

// #region styled-components
const StyledFooter = styled.footer`
  height: calc(var(--nav-height) + 1rem);
  background: var(--primary-color);

  .link-icons {
    line-height: 0;
    font-size: 2.25rem;
    margin: 0 1rem;
    transition: var(--transition);
    color: var(--dark-text-color);

    &:hover {
      color: var(--hover-color);
    }
  }
`;
// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      aria: PropTypes.string,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 *
 */
const Footer = ({ socials }) => {
  return (
    <StyledFooter
      className="d-flex align-items-center justify-content-center p-2"
      data-bs-theme="light"
    >
      {socials.map((element) => {
        return (
          <a
            key={element.id}
            href={element.url}
            aria-label={element.aria}
            className="link-icons"
          >
            <Icon icon={element.icon} />
          </a>
        );
      })}
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;
// #endregion

export default Footer;
