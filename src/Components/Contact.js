import React from "react";
import { Element } from "react-scroll";
import { Title, Content, ElementPadding } from "../GlobalStyledComponents";
import GitHubIcon from "../images/GitHubIcon.svg";
import LinkedinIcon from "../images/LinkedinIcon.svg";
import styled from "styled-components/macro";

const LinkIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Contact = () => {
  return (
    <ElementPadding>
      <Element name="contact">
        <Title>Contact</Title>
        <Content>
          stephanie.pops@gmail.com
          <div>
            <a
              href="https://www.linkedin.com/in/stephaniepops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon src={LinkedinIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephaniepops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon src={GitHubIcon} />
            </a>
          </div>
        </Content>
      </Element>
    </ElementPadding>
  );
};

export default Contact;
