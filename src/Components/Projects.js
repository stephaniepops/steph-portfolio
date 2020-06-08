import React from "react";

import Project from "./SingleProject";

const Projects = () => {
  return (
    <div>
      <h3>Projects:</h3>
      <ul>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </ul>
    </div>
  );
};

export default Projects;
