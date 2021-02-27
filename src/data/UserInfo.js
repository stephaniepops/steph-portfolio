import PortfolioProject from "../images/LogoStephFlip.jpg";
import FavouriteMovieProject from "../images/Favourite Movie Finder Screenshot.PNG";
import figma from "../images/logos/figma.svg";
import framer from "../images/logos/framer.svg";
import git from "../images/logos/git.svg";
import java from "../images/logos/java.svg";
import node from "../images/logos/node-dot-js.svg";
import react from "../images/logos/react.svg";
import redux from "../images/logos/redux.svg";
import postgresql from "../images/logos/postgresql.svg";
import aws from "../images/logos/amazonaws.svg";
import serverless from "../images/logos/serverless.svg";
import styledComponents from "../images/logos/styled-components.svg";
import javaScript from "../images/logos/javascript.svg";

export const Projects = [
  {
    title: "Portfolio Project",
    description:
      "After completing a number of React tutorials on Team Treehouse, I decided to practice the skills I learned by creating my portfolio.",
    techStack: ["React", "JavaScript", "Styled Components", "Framer Motion"],
    image: PortfolioProject,
    imageDescription: "Logo image from portfolio",
    codeLink: "https://github.com/stephaniepops/steph-portfolio",
    demoLink: null,
  },
  {
    title: "Favourite Movie Finder",
    description:
      "A small project I created using the OMDB open API to explore Redux, Chakra UI and Formik",
    techStack: [
      "React",
      "JavaScript",
      "Styled Components",
      "Redux",
      "Chakra  UI",
      "Formik",
    ],
    image: FavouriteMovieProject,
    imageDescription: "Screenshot of Favourite Movie Finder app",
    codeLink: "https://github.com/stephaniepops/OMDB-API-Test",
    demoLink: "https://favouritemoviefinder.netlify.app/",
  },
];

export const SkillList = [
  {
    name: "React",
    image: react,
    url: "",
  },
  {
    name: "Java",
    image: java,
    url: "",
  },
  {
    name: "Node.js",
    image: node,
    url: "",
  },
  {
    name: "Figma",
    image: figma,
    url: "",
  },
  {
    name: "Styled Components",
    image: styledComponents,
    url: "",
  },
  {
    name: "JavaScript",
    image: javaScript,
    url: "",
  },
  {
    name: "GitHub",
    image: git,
    url: "",
  },
  {
    name: "Framer Motion",
    image: framer,
    url: "",
  },
  {
    name: "Redux",
    image: redux,
    url: "",
  },
  {
    name: "PostgreSQL",
    image: postgresql,
    url: "",
  },
  {
    name: "Amazon Web Services",
    image: aws,
    url: "",
  },
  {
    name: "Serverless",
    image: serverless,
    url: "",
  },
];
