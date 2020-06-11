import React from "react";
import ProfilePhoto from "../images/placeholderImage.jpg";

import styled from "styled-components";

const HeaderImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 15px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.2) rotate(-90deg);
  }
`;

const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhotoName = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderImage src={ProfilePhoto} />
      </HeaderWrapper>
      <h1>steph.pop(s)</h1>
    </div>
  );
};

export default PhotoName;
