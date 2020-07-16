import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components/macro";
import { Title, ElementPadding } from "../GlobalStyledComponents";

import Project from "./Project";

const Container = styled.div`
  margin: 1.1em auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 800px));
`;

const ProjectContainer = (props) => {
  return (
    <ElementPadding>
      <Element name="projects">
        <Title>Projects</Title>
        <Container>
          {props.projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </Container>
      </Element>
    </ElementPadding>
  );
};

export default ProjectContainer;
