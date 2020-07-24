import React from "react";
import ProfilePhoto from "../images/LogoStephFlip.jpg";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const HeaderImage = styled(motion.img)`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin: 15px;
  transition: all 0.5s;
  animation: hueChange 20s infinite;
  @keyframes hueChange {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
`;

const Name = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const PhotoName = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderImage
          whileHover={{
            zoom: 1.05,

            transition: { duration: 0.25, ease: "easeInOut" },
          }}
          src={ProfilePhoto}
        />
      </HeaderWrapper>
      <Name>Steph.pop(s)</Name>
    </div>
  );
};

export default PhotoName;
