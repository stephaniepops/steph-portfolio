import React from "react";
import styled from "styled-components/macro";

const Description = () => {
  const Desc = styled.div`
    font-size: 1.2em;
    line-height: 30px;
    font-weight: 400;
    padding: 15px;
  `;
  return (
    <Desc>
      Hello! I'm Steph. Currently I am in my last year of Applied Computer
      Science at the University of Winnipeg. Outside of school I enjoy exploring
      new technologies to help me become a more well-rounded programmer.
      Eventually I hope this portfolio will host many exciting projects. Enjoy{" "}
      <span role="img" aria-label="black heart">
        🖤
      </span>
    </Desc>
  );
};

export default Description;
