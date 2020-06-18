import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Skill from "./Skill";

const Skills = (props) => {
  return (
    <ElementPadding>
      <Element name="skills">
        <Title>Skills</Title>
        {props.skills.map((skill, index) => (
          <Skill {...skill} key={index} />
        ))}
        <Skill />
      </Element>
    </ElementPadding>
  );
};

export default Skills;
