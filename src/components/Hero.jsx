import styled from "styled-components";
import { Link } from "react-scroll";
// Data
import { Socials } from "../data";
// Icons
import { FaChevronCircleDown } from "react-icons/fa";
// Media
import Logo from "../media/logo.svg";
import HeroLight from "../media/hero-light.jpg";
import HeroDark from "../media/hero-dark.jpg";
// Components
import { Spin } from "./globalStyledComponents";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--primary), var(--light))"
        : "linear-gradient(135deg, var(--primary), var(--dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-overlay);
    z-index: -1;
  }

  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    justify-content: center;

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: var(--min-footer-height);

      svg {
        margin: 0 1rem;
        font-size: 2.5rem;
        transition: var(--transition);
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--dark)" : "var(--light)"};

        &:hover {
          color: var(--primary);
        }
      }
    }

    .hero-images {
      display: none;
    }
  }

  .down {
    font-size: 2.5rem;
    line-height: 0;
    border-radius: 50%;
    transition: var(--transition);
    border: 1px solid
      ${({ theme }) =>
        theme.name === "light" ? "var(--light)" : "var(--dark)"};
    background: ${({ theme }) =>
      theme.name === "light" ? "var(--light)" : "var(--dark)"};

    &:hover {
      color: var(--primary);
    }
  }

  @media screen and (min-width: 800px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${HeroLight}) no-repeat center center fixed`
          : `url(${HeroDark}) no-repeat center center fixed`};
      background-size: cover;
    }

    .hero-center {
      grid-template-columns: repeat(2, 1fr);

      .hero-info {
        display: grid;
        place-items: center;

        h1 {
          font-size: 3rem;
          line-height: 1.25;
        }
      }

      .hero-images {
        display: block;
        justify-self: center;
      }
    }

    .down {
      font-size: 3rem;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }
`;

export default function Hero({ section1 }) {
  return (
    <StyledHero>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Sample
            <br />
            Call To Action
          </h1>
          <div className="socials">
            {Socials.map(function ({ id, icon, link }) {
              return (
                <a href={link} key={id} className="icons">
                  {icon}
                </a>
              );
            })}
          </div>
        </article>
        <article className="hero-images">
          <img src={Logo} alt="React Logo" className="hero-img" />
        </article>
      </div>
      <Link to={section1} smooth={true} offset={-80}>
        <FaChevronCircleDown className="down" />
      </Link>
    </StyledHero>
  );
}
