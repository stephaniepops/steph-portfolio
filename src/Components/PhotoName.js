import React from "react";
import ProfilePhoto from "../images/placeholderImage.jpg";
import styled from "styled-components/macro";

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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const PhotoName = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderImage src={ProfilePhoto} />
      </HeaderWrapper>
      <Name>Steph.pop(s)</Name>
    </div>
  );
};

export default PhotoName;
