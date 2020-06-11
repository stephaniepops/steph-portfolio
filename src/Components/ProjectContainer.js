import React from "react";
import { Element } from "react-scroll";

import Project from "./Project";

const ProjectContainer = (props) => {
  return (
    <Element name="projects">
      <h2>Projects:</h2>
      {props.projects.map((project) => (
        <Project {...project} key={project.key} />
      ))}
    </Element>
  );
};

export default ProjectContainer;
