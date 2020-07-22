import React from "react";
import styled from "styled-components/macro";
import HyperLinkIcon from "../images/logos/External_Link_(89630)_-_The_Noun_Project.svg";
import GithubIcon from "../images/GitHubIcon.svg";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 20px;
  > a {
    margin: 3px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const ProjectLinks = ({ codeLink, demoLink }) => {
  return (
    <Container>
      <a href={codeLink}>
        <Icon src={HyperLinkIcon} />
      </a>
      <a href={demoLink}>
        <Icon src={GithubIcon} />
      </a>
    </Container>
  );
};

export default ProjectLinks;
