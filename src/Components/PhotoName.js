import React from "react";
import ProfilePhoto from "../images/placeholderImage.jpg";

import styled from "styled-components";

const HeaderImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 15px;
`;

const PhotoName = () => {
  return (
    <div>
      <HeaderImage src={ProfilePhoto} />
      <h2>steph.pop(s)</h2>
    </div>
  );
};

export default PhotoName;
