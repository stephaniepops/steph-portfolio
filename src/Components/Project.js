import React from "react";

const Project = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Technologies Used: {props.tech}</p>
    </div>
  );
};

export default Project;
