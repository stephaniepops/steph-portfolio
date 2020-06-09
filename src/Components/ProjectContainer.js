import React from "react";

import Project from "./Project";

const ProjectContainer = (props) => {
  return (
    <div>
      <h3>Projects:</h3>
      {props.projects.map((project) => (
        <Project {...project} key={project.key} />
      ))}
    </div>
  );
};

export default ProjectContainer;
