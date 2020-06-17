import React, { useState } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components/macro";

const NavWrapper = styled.section`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  display: inline-block;
  float: none;
  padding-left: 30px;
  padding-right: 30px;
  font-size: ${({ isHover }) => (isHover ? "2.50em" : "1.25em")};
  transition: 0.25s linear all;
`;

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <NavWrapper>
      <nav>
        <ListItem
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          isHover={hover}
          onClick={() =>
            scroller.scrollTo("skills", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
        >
          Skills
        </ListItem>
        <ListItem
          isHover={hover}
          onClick={() =>
            scroller.scrollTo("projects", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
        >
          Projects
        </ListItem>
        <ListItem
          onClick={() =>
            scroller.scrollTo("contact", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
        >
          Contact
        </ListItem>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
