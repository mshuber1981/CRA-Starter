// Routes
import ResponsiveImages from "./pages/ResponsiveImages";

// GitHub username
export const gitHubUsername = "mshuber1981";

// Navbar logo
export const navLogo = undefined;

// Navbar routes
export const homeRouteName = undefined;
export const navRoutes = [
  {
    id: 0,
    name: "Responsive Images",
    route: "/ResponsiveImages",
    page: <ResponsiveImages />,
  },
];

// Social media
export const socials = [
  {
    id: 0,
    url: "https://github.com/mshuber1981",
    aria: "Check out my GitHub profile.",
    icon: "fa:github",
  },
  {
    id: 1,
    url: "https://www.freecodecamp.org/mshuber1981",
    aria: "Check out my Free Code Camp profile.",
    icon: "fa-brands:free-code-camp",
  },
];
