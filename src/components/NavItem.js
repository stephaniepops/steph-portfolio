import React, { useState } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components/macro";

const NavLink = styled.div`
  display: inline-block;
  float: none;
  padding-left: 30px;
  padding-right: 30px;
  font-size: ${({ isHover }) => (isHover ? "1.75em" : "1.25em")};
  transition: 0.25s linear all;
`;
const NavItem = ({ name, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <NavLink
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      isHover={hover}
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
