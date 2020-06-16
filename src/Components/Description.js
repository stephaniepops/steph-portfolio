import React from "react";
import styled from "styled-components/macro";

const Description = () => {
  const Desc = styled.div`
    line-height: 30px;
    font-weight: 300;
  `;
  return (
    <Desc>
      Hello! I'm Steph. Currently I am in my last year of Applied Computer
      Science at the University of Winnipeg. Outside of school I enjoy exploring
      new technologies to help me become a more well-rounded programmer.
      Eventually I hope this portfolio will host many exciting projects, but for
      now it hosts only itself. Enjoy 🖤
    </Desc>
  );
};

export default Description;
