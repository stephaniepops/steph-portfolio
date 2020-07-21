import React from "react";

import styled from "styled-components/macro";
import NavItem from "./NavItem";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;

  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 20px;
`;
const Navbar = () => {
  return (
    <NavWrapper>
      <NavItem name="Skills" link="skills"></NavItem>
      <NavItem name="Projects" link="projects"></NavItem>
      <NavItem name="Contact" link="contact"></NavItem>
    </NavWrapper>
  );
};

export default Navbar;
