import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Title, Content } from "../GlobalStyledComponents";

const Skills = () => {
  return (
    <Element name="skills">
      <Title>Skills</Title>
      <Content>
        <div>Java</div>
        <div>React</div>
        <div>Node.js</div>
        <div>Express</div>
      </Content>
    </Element>
  );
};

export default Skills;
