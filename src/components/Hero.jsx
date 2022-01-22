import styled from "styled-components";
import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";

// Media
import Logo from "../media/logo.svg";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--dark));
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
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    justify-content: center;

    .hero-images {
      display: none;
    }
  }

  @media screen and (min-width: 800px) {
    .hero-center {
      grid-template-columns: repeat(2, 1fr);

      .hero-info {
        display: grid;
        place-items: center;

        h1 {
          font-size: 3rem;
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
`;

export default function Hero({ section1 }) {
  return (
    <StyledHero>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            CRA Starter
            <br />
            Template
          </h1>
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
