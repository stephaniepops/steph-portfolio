import React from "react";
import { Element } from "react-scroll";
import { Title } from "../GlobalStyledComponents";
import styled from "styled-components/macro";

import gitHubIcon from "../images/GitHubIcon.svg";
import linkedinIcon from "../images/iconmonstr-linkedin-3.svg";
import emailIcon from "../images/iconmonstr-email-2.svg";
import ContactIcon from "./ContactIcon";

const IconContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  max-width: 200px;
`;

const Contact = () => {
  return (
    <Element name="contact">
      <Title>Contact</Title>
      <IconContainer>
        <ContactIcon
          icon={emailIcon}
          href="mailto: stephanie.pops@gmail.com"
          isEmail
        />
        <ContactIcon
          icon={gitHubIcon}
          href="https://github.com/stephaniepops"
        />
        <ContactIcon
          icon={linkedinIcon}
          href="https://www.linkedin.com/in/stephaniepops"
        />
      </IconContainer>
    </Element>
  );
};

export default Contact;
