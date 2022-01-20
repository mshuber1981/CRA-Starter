/**
 * Navigation Logo
 */
import navLogo from "./media/logo.svg";
export const Logo = navLogo;

/**
 * Colors
 */
export const active = "";

/**
 * NavBar/Sidbar pages and links
 */
// export const links = [
//   {
//     ID: "1",
//     name: "Home",
//     link: "Home",
//   },
//   {
//     ID: "2",
//     name: "Section 1",
//     link: "Section-1",
//   },
//   {
//     ID: "3",
//     name: "Section 2",
//     link: "Section-2",
//   },
//   {
//     ID: "4",
//     name: "Section 3",
//     link: "Section-3",
//   },
//   {
//     ID: "5",
//     name: "Route Example",
//     link: "/Route-1",
//   },
// ];

export const links = [
  {
    page: "Home",
    route: "/",
    links: [
      {
        id: "1",
        name: "Home",
        to: "Home",
      },
      {
        id: "2",
        name: "Section 1",
        to: "Section-1",
      },
      {
        id: "3",
        name: "Section 2",
        to: "Section-2",
      },
      {
        id: "4",
        name: "Section 3",
        to: "Section-3",
      },
      {
        id: "5",
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
        id: "1",
        name: "Home",
        to: "/",
      },
    ],
  },
];
