import React, { useState } from "react";
import styled from "styled-components/macro";
import TechBox from "./TechBox";
import ProjectLinks from "./ProjectLinks";
import { mediumBreakPoint, smallBreakPoint } from "../constants";

const Layout = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${mediumBreakPoint}) {
    flex-direction: column;
  }
`;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: left;
`;

const Tile = styled.div`
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 8px 4px 15px 5px #0000000d;
  text-align: center;
  padding: 30px;
  position: relative;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.25em;
  margin: 15px 0;

  @media screen and (max-width: ${mediumBreakPoint}) {
    text-align: center;
  }
`;

const Description = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;

  @media screen and (max-width: ${mediumBreakPoint}) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 175px;
  height: 175px;
  margin: 15px;
  margin-bottom: 5px;
  border-radius: 50%;
  border-color: #575757;
  border-style: double;
  border-width: 6.5px;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media screen and (max-width: ${smallBreakPoint}) {
    flex-direction: column;
    text-align: center;
    max-width: 240px;
    justify-content: center;
    align-self: center;
  }
  @media screen and (max-width: ${mediumBreakPoint}) {
    justify-content: center;
    align-self: center;
  }
`;

const TitleLinkContainer = styled.div`
  display: flex;
`;

const Project = ({
  title,
  image,
  imageDescription,
  description,
  techStack,
  codeLink,
  demoLink,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Tile>
      <ProjectLinks codeLink={codeLink} demoLink={demoLink}></ProjectLinks>

      <Layout>
        <Image src={image} alt={imageDescription} />

        <InnerText>
          <Title
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            isHover={hover}
          >
            {title}
          </Title>
          <Description>{description}</Description>
          <TechStackContainer>
            {techStack.map((tech) => (
              <TechBox text={tech} />
            ))}
          </TechStackContainer>
        </InnerText>
      </Layout>
    </Tile>
  );
};

export default Project;
