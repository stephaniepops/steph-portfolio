import React from "react";
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

const Text = styled.div`
  text-align: center;
  margin: 20px;
`;

const Skill = ({ name, image }) => {
  return (
    <Container>
      <Logo src={image} alt={name} />
      <Text>{name}</Text>
    </Container>
  );
};

export default Skill;
