// Icons
import navLogo from "./media/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Navigation Logo
 */
export const Logo = navLogo;

/**
 * Colors
 */
export const active = "";

/**
 * NavBar/Sidbar pages and links
 */
export const links = [
  {
    page: "Home",
    route: "/",
    links: [
      {
        id: 1,
        name: "Home",
        to: "Home",
      },
      {
        id: 2,
        name: "Section 1",
        to: "Section-1",
      },
      {
        id: 3,
        name: "Section 2",
        to: "Section-2",
      },
      {
        id: 4,
        name: "Section 3",
        to: "Section-3",
      },
      {
        id: 5,
        name: "Route Example",
        to: "/Route-1",
      },
    ],
  },
  {
    page: "Route1Example",
    route: "/Route-1",
    links: [
      {
        id: 1,
        name: "Home",
        to: "/",
      },
    ],
  },
];

/**
 * Socials
 */
export const Socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/mshuber1981",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mikeyhuber/",
  },
];
