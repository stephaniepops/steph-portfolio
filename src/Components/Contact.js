import React from "react";
import { Element } from "react-scroll";
import { Title, Content, ElementPadding } from "../GlobalStyledComponents";
import GitHubIcon from "../images/GitHubIcon.svg";
import LinkedinIcon from "../images/LinkedinIcon.svg";
import styled from "styled-components/macro";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;
const Email = styled.div`
  margin-bottom: 25px;
`;

const Contact = () => {
  return (
    <ElementPadding>
      <Element name="contact">
        <Title>Contact</Title>
        <Content>
          <Email>
            <a href="mailto: stephanie.pops@gmail.com">
              stephanie.pops@gmail.com
            </a>
          </Email>
          <IconContainer>
            <a
              href="https://www.linkedin.com/in/stephaniepops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon src={LinkedinIcon} />
            </a>
            <a
              href="https:/https://github.com/stephaniepops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon src={GitHubIcon} />
            </a>
          </IconContainer>
        </Content>
      </Element>
    </ElementPadding>
  );
};

export default Contact;
