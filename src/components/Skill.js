import React from "react";
import { Element } from "react-scroll";
import { Content } from "../GlobalStyledComponents";

const Skill = ({ name, image }) => {
  return (
    <Element name="skills">
      <Content>{name}</Content>
    </Element>
  );
};

export default Skill;
