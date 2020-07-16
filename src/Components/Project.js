import React, { useState } from "react";
import styled from "styled-components/macro";

const Layout = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
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
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.25em;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Description = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
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

const Project = ({ title, image, imageDescription, description, tech }) => {
  const [hover, setHover] = useState(false);

  return (
    <Tile>
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
          <div>{tech}</div>
        </InnerText>
      </Layout>
    </Tile>
  );
};

export default Project;
