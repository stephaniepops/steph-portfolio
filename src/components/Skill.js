import React from "react";
import { Content } from "../GlobalStyledComponents";
import styled from "styled-components/macro";

const Logo = styled.img`
  height: 75px;
  width: 75px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Skill = ({ name, image }) => {
  return (
    <Container>
      <Logo src={image} alt={name} />
      <Content>{name}</Content>
    </Container>
  );
};

export default Skill;
