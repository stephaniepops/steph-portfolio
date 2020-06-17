import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components/macro";
import { Title } from "../GlobalStyledComponents";

import Project from "./Project";

const Container = styled.div`
  margin: 1.1em auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const ProjectContainer = (props) => {
  return (
    <Element name="projects">
      <Title>Projects</Title>
      <Container>
        {props.projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </Container>
    </Element>
  );
};

export default ProjectContainer;
