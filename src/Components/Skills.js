import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

const Skills = () => {
  const SkillsSection = styled.div`
    margin: 20px;
    text-align: center;
  `;

  const SkillsTitle = styled.div`
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: 400;
  `;

  return (
    <SkillsSection>
      <Element name="skills">
        <SkillsTitle>Skills</SkillsTitle>

        <div>Java</div>
        <div>React</div>
        <div>Node.js</div>
        <div>Express</div>
      </Element>
    </SkillsSection>
  );
};

export default Skills;
