import React from "react";
import { Element } from "react-scroll";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Skill from "./Skill";
import styled from "styled-components/macro";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  max-width: 850px;
  grid-gap: 25px;
  width: 100vw;
`;

const Skills = (props) => {
  return (
    <ElementPadding>
      <Element name="skills">
        <Title>Skills</Title>
        <SkillsContainer>
          {props.skills.map((skill, index) => (
            <Skill {...skill} key={index} />
          ))}
        </SkillsContainer>
      </Element>
    </ElementPadding>
  );
};

export default Skills;
