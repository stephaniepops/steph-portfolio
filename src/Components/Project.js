import React from "react";
import styled from "styled-components/macro";
const Project = (props) => {
  const Tile = styled.div`
    box-sizing: border-box;
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 4px #d6d6d6;
    text-align: center;
    padding: 1em;
    margin-bottom: 1.5em;
  `;

  const ProjectTitle = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 1.25em;
  `;

  return (
    <Tile>
      <ProjectTitle>{props.title}</ProjectTitle>
      <img src={props.image} alt={props.imageDescription} />
      <p>{props.description}</p>
      <p>Technologies Used: {props.tech}</p>
    </Tile>
  );
};

export default Project;
