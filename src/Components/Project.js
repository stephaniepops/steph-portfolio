import React, { useState } from "react";
import styled from "styled-components/macro";

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
  font-size: 1.5em;
`;

const ProjectImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 15px;
  border-radius: 50%;
  border-color: #575757;
  border-style: double;
  border-width: 6.5px;
`;

const Project = ({ title, image, imageDescription, description, tech }) => {
  const [hover, setHover] = useState(false);

  return (
    <Tile>
      <ProjectTitle
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        isHover={hover}
      >
        {title}
      </ProjectTitle>
      <ProjectImage src={image} alt={imageDescription} />
      <p>{description}</p>
      <p>Technologies Used: {tech}</p>
    </Tile>
  );
};

export default Project;
