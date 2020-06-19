import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Skill from "./Skill";

const axios = require("axios");

axios
  .get("https://teamtreehouse.com/stephaniepops.json")
  .then(function (res) {
    console.log(res.data.badges);
  })
  .catch(function (error) {
    console.log(error);
  });

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
