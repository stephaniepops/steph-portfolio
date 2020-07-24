import React from "react";
import { Element } from "react-scroll";
import { Title } from "../GlobalStyledComponents";
import Skill from "./Skill";
import styled from "styled-components/macro";

const SkillsContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  max-width: 850px;
  grid-gap: 10px;
`;

const Skills = (props) => {
  return (
    <Element name="skills">
      <Title>Skills</Title>
      <SkillsContainer>
        {props.skills.map((skill, index) => (
          <Skill {...skill} key={index} />
        ))}
      </SkillsContainer>
    </Element>
  );
};

export default Skills;
