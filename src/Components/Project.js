import React from "react";

const Project = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Technologies Used: {props.tech}</p>
    </div>
  );
};

export default Project;
