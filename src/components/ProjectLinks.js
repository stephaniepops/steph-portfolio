import React from "react";
import styled from "styled-components/macro";
import HyperLinkIcon from "../images/logos/External_Link_(89630)_-_The_Noun_Project.svg";
import GithubIcon from "../images/GitHubIcon.svg";
import ProjectLink from "./ProjectLink";

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

const ProjectLinks = ({ codeLink, demoLink }) => {
  return (
    <Container>
      {demoLink && <ProjectLink link={demoLink} icon={HyperLinkIcon} />}
      <ProjectLink link={codeLink} icon={GithubIcon} />
    </Container>
  );
};

export default ProjectLinks;
