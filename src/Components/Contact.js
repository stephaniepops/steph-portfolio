import React from "react";
import { Element } from "react-scroll";
import { Title, Content } from "../GlobalStyledComponents";

const Contact = () => {
  return (
    <Element name="contact">
      <Title>Contact</Title>
      <Content>
        Email: stephanie.pops@gmail.com Linkedn: (Add Linkedin Link) Git: (add
        git info)
      </Content>
    </Element>
  );
};

export default Contact;
