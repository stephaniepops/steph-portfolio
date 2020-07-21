import React, { useState } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const NavLink = styled(motion.div)`
  cursor: pointer;
  margin: 20px;
`;

const NavItem = ({ name, link }) => {
  return (
    <NavLink
      whileTap={{ scale: 0.9 }}
      onClick={() =>
        scroller.scrollTo(link, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -50,
        })
      }
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
