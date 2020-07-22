import React from "react";
import { scroller } from "react-scroll";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const NavLink = styled(motion.button)`
  cursor: pointer;
  margin: 18px;
  border: none;
  background-color: transparent;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 20px;
  -webkit-tap-highlight-color: transparent;

  :focus {
    outline: none;
  }
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
