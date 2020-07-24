import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const Icon = styled(motion.img)`
  width: 40px;
  height: 40px;
`;

const ProjectLink = ({ link, icon }) => {
  return (
    <a href={link}>
      <Icon
        whileHover={{
          rotate: [0, 10, 0, -10, 0, 10, 0, -10, 0],
          transition: { duration: 0.4 },
        }}
        src={icon}
      />
    </a>
  );
};

export default ProjectLink;
