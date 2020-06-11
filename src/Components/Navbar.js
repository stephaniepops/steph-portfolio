import React from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";

const NavWrapper = styled.section`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;
`;

const ListItem = styled.li`
  display: inline-block;
  float: none;
  padding-left: 30px;
  padding-right: 30px;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <ul>
          <ListItem
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
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
